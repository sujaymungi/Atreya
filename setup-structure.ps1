# Ensure we're in the repository root
Set-Location "C:\Users\Lenovo\source\repos\Atreya"

Write-Host "Setting up correct directory structure..."

# Create necessary directories
New-Item -ItemType Directory -Force -Path "Atreya\wwwroot\images" | Out-Null

# Copy images if they exist in the root images folder
if (Test-Path "images\*.PNG") {
    Copy-Item "images\*.PNG" -Destination "Atreya\wwwroot\images\" -Force
}

Write-Host "Directory structure ready. Please run these Git commands:"
Write-Host "git add Atreya/wwwroot/images/*.PNG"
Write-Host "git commit -m 'Update image locations'"
Write-Host "git push origin master"