Write-Host "Starting file move process..."

# Define paths
$sourceDir = ".\Atreya\wwwroot\images"
$targetDir = ".\images"

# Create target directory if it doesn't exist
if (-not (Test-Path $targetDir)) {
    Write-Host "Creating images directory..."
    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
}

# Check if source directory exists
if (Test-Path $sourceDir) {
    Write-Host "Source directory found at: $sourceDir"
    
    # Check for PNG files
    $pngFiles = Get-ChildItem -Path $sourceDir -Filter "*.PNG"
    if ($pngFiles.Count -gt 0) {
        Write-Host "Found $($pngFiles.Count) PNG files"
        
        # Copy files
        foreach ($file in $pngFiles) {
            Write-Host "Copying $($file.Name)..."
            Copy-Item "$sourceDir\$($file.Name)" -Destination $targetDir -Force
        }
        
        Write-Host "Files copied successfully!"
    } else {
        Write-Host "No PNG files found in source directory!"
    }
} else {
    Write-Host "Source directory not found at: $sourceDir"
}