# Ensure we're in the repository root
Set-Location "C:\Users\Lenovo\source\repos\Atreya"

Write-Host "Cleaning up directory structure..."

# Move images if they exist in wwwroot
if (Test-Path "Atreya\wwwroot\images\*.PNG") {
    # Create images directory if it doesn't exist
    New-Item -ItemType Directory -Force -Path "images" | Out-Null
    Copy-Item "Atreya\wwwroot\images\*.PNG" -Destination "images\" -Force
}

# Remove the duplicate wwwroot structure after ensuring files are moved
if (Test-Path "Atreya\wwwroot") {
    Remove-Item "Atreya\wwwroot" -Recurse -Force
}

Write-Host "Directory structure cleaned up. Please run these Git commands:"
Write-Host "git add ."
Write-Host "git commit -m 'Consolidate files to repository root'"
Write-Host "git push origin master"