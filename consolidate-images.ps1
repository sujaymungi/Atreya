# Remove unnecessary directories and consolidate files
Write-Host "Starting cleanup..."

# Define paths
$rootImagesPath = "images"
$wwwrootImagesPath = "Atreya\wwwroot\images"
$placeholderFile = "images\placeholder.txt"
$readmeFile = "Atreya\wwwroot\images\readme.txt"

# Create root images directory if it doesn't exist
if (-not (Test-Path $rootImagesPath)) {
    New-Item -ItemType Directory -Force -Path $rootImagesPath | Out-Null
    Write-Host "Created root images directory"
}

# Move images from wwwroot if they exist
if (Test-Path $wwwrootImagesPath) {
    if (Test-Path "$wwwrootImagesPath\*.PNG") {
        Copy-Item "$wwwrootImagesPath\*.PNG" -Destination $rootImagesPath -Force
        Write-Host "Moved PNG files from wwwroot to root images directory"
    }
    # Remove wwwroot images directory
    Remove-Item $wwwrootImagesPath -Recurse -Force
    Write-Host "Removed wwwroot images directory"
}

# Remove placeholder and readme files if they exist
if (Test-Path $placeholderFile) {
    Remove-Item $placeholderFile -Force
    Write-Host "Removed placeholder.txt"
}

if (Test-Path $readmeFile) {
    Remove-Item $readmeFile -Force
    Write-Host "Removed readme.txt"
}

Write-Host "Cleanup complete. Please run these Git commands:"
Write-Host "git add ."
Write-Host "git commit -m 'Consolidate images into single directory'"
Write-Host "git push origin master"