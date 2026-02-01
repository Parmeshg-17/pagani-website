$source = "../pagani frames"
$dest = "public/images/zonda-sequence"
New-Item -ItemType Directory -Force -Path $dest
Get-ChildItem $source -Filter "*.jpg" | ForEach-Object {
    if ($_.Name -match "ezgif-frame-(\d+).jpg") {
        $num = [int]$matches[1]
        Copy-Item $_.FullName -Destination "$dest\$num.jpg"
    }
}
Write-Host "Images copied successfully."
