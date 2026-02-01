"use client";

import { MotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface HuayraScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
}

const FRAME_COUNT = 240;

export default function HuayraScrollCanvas({ scrollYProgress }: HuayraScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Transform scroll progress (0-1) to frame index (1-240)
    // Ensure we clamp between 1 and 240
    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

    useEffect(() => {
        // Preload images
        const loadImages = async () => {
            const imgs: HTMLImageElement[] = [];
            const promises = [];

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    img.src = `/images/zonda-sequence/${i}.jpg`;
                    img.onload = () => resolve();
                    img.onerror = () => {
                        console.error(`Failed to load image ${i}`);
                        resolve(); // Resolve anyway to avoid blocking
                    };
                    imgs[i - 1] = img; // Store at index 0-239
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(imgs);
            setIsLoading(false);
        };

        loadImages();
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Handle high-DPI scaling
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        ctx.scale(dpr, dpr);

        // Clear canvas
        ctx.clearRect(0, 0, rect.width, rect.height);

        // Get image
        // Math.round to get integer index, clamp to valid range
        const imgIndex = Math.min(
            Math.max(Math.round(index) - 1, 0),
            images.length - 1
        );
        const img = images[imgIndex];

        if (!img) return;

        // Draw image - contain logic
        const imgAspect = img.width / img.height;
        const canvasAspect = rect.width / rect.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasAspect > imgAspect) {
            // Canvas is wider than image (fit height)
            drawHeight = rect.height;
            drawWidth = rect.height * imgAspect;
            offsetX = (rect.width - drawWidth) / 2;
            offsetY = 0;
        } else {
            // Canvas is taller than image (fit width)
            drawWidth = rect.width;
            drawHeight = rect.width / imgAspect;
            offsetX = 0;
            offsetY = (rect.height - drawHeight) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (!isLoading) {
            renderFrame(latest);
        }
    });

    // Initial render when loaded
    useEffect(() => {
        if (!isLoading) {
            renderFrame(frameIndex.get());
        }
    }, [isLoading, images]);

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (!isLoading) renderFrame(frameIndex.get());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoading]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-contain"
        />
    );
}
