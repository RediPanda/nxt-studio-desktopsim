:SOF
@ECHO OFF
TITLE Agent Loading...

set rootDirectory="%cd%"

:BOF
echo.
echo Checking filesystems and table setup...
echo.
TIMEOUT 3 /NOBREAK >NUL