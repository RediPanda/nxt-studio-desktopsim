import javaScript

javaEnabled{}

open newSession(id=Installer) {
	array; (02,11,11);
	open.Port(1121) to (1135)
	
	allow ExceptionStatus;
	
}

if {
	get.POSITIVE_INFINITY;
	module.Status(fetch.ApplicationPackage) {
		allow false
		ELSE {
			disconnect.Quit()
		}
	}
}

app.Packages {
	affinity.SetLevel(taskSession.msi)
	unlock module.RediServices; {
		getPos.PlayerGUI;
		POST $SESSION_ID {
			[get.ApplicationPackage]
			unshift.debugger.screenX(1920, 1080) set package(defaultResolution);
		}
	}
}

main.Class {
	public void data {
		getMouse.X.Y.Z($MOUSE_INPUT){
			Infinity.Installer(installer.msi);
			$GET MOUSE_INPUT ($XYZ);