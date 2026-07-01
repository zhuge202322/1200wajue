Add-Type -AssemblyName System.Drawing
$sourceDir = Get-ChildItem "D:\kehu\1200wajue\网站内容" -Directory | Where-Object { $_.Name -like "*6*" -and $_.Name -like "*图*" } | Select-Object -First 1
$source = $sourceDir.FullName
$dest = "d:\kehu\1200wajue\public\images\banner"

if (-not (Test-Path $dest)) {
    New-Item -ItemType Directory -Path $dest | Out-Null
}

$files = Get-ChildItem -Path $source -File | Where-Object { $_.Extension -match "(?i)\.(jpg|jpeg|png)" }

foreach ($file in $files) {
    try {
        $bmp = [System.Drawing.Image]::FromFile($file.FullName)
        $width = $bmp.Width
        $height = $bmp.Height

        if ($width -gt 1920) {
            $height = [int]($height * 1920 / $width)
            $width = 1920
        }

        $newBmp = New-Object System.Drawing.Bitmap $width, $height
        $g = [System.Drawing.Graphics]::FromImage($newBmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.DrawImage($bmp, 0, 0, $width, $height)
        
        $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]80)
        
        $outFile = Join-Path $dest ($file.BaseName + ".jpg")
        $newBmp.Save($outFile, $encoder, $encParams)
        
        $g.Dispose()
        $newBmp.Dispose()
        $bmp.Dispose()
        Write-Host "Processed: $($file.Name)"
    } catch {
        Write-Host "Error processing $($file.Name): $_"
    }
}
