Write-Host "Moving files to repository root..."

# Create directories if they don't exist
New-Item -ItemType Directory -Force -Path "images" | Out-Null

# Copy images from wwwroot to root images directory
Copy-Item "Atreya\wwwroot\images\*.PNG" -Destination "images\" -Force

Write-Host "Files moved successfully!"