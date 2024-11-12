
		Webcam.set({
			width: 320,
			height: 240,
			dest_width: 320,
			dest_height: 240,
			image_format: 'jpeg',
			jpeg_quality: 90,
			force_flash: false,
			flip_horiz: true,
			fps: 45
		});
		Webcam.attach( '#my_camera' );
		
		function showStudentDetails(idno, lastname, firstname, course, level, image) {
            document.getElementById('view_idno').innerText = idno;
            document.getElementById('view_lastname').innerText = lastname;
            document.getElementById('view_firstname').innerText = firstname;
            document.getElementById('view_course').innerText = course;
            document.getElementById('view_level').innerText = level;
            document.getElementById('view_image').style.backgroundImage = `url('${image}')`;
            document.getElementById('viewStudent').style.display = 'block';
        }
		
		function editStudent(idno, lastname, firstname, course, level) {
			document.getElementById('idno').value = idno;
			document.getElementById('lastname').value = lastname;
			document.getElementById('firstname').value = firstname;
			document.getElementById('course').value = course;
			document.getElementById('level').value = level;
			// close the show details modal
			document.getElementById('viewStudent').style.display = 'none';

			// change the action form
			document.getElementById('studentForm').action = '/updateinformation';
			//change the idno field to readonly
			document.getElementById('idno').setAttribute('readonly', 'readonly')
			//show the add modal
			document.getElementById('add').style.display = 'block';
		}
		
		

		function saveData() {
			// Check if each field is filled
			const idno = document.getElementById('idno').value.trim();
			const lastname = document.getElementById('lastname').value.trim();
			const firstname = document.getElementById('firstname').value.trim();
			const course = document.getElementById('course').value.trim();
			const level = document.getElementById('level').value.trim();

			if (!idno || !lastname || !firstname || !course || !level) {
				alert("Please fill in all fields.");
				return;  // Stop the form submission
			}

			// If all fields are filled, proceed with capturing the webcam image and submitting the form
			Webcam.snap(function(data_uri) {
				document.getElementById('webcam').value = data_uri;
				document.getElementById('studentForm').submit();
			});
		}
		
		//delele confirmation
		function confirmDelete() {
        return confirm("Are you sure you want to delete this student?");
    	}

		//logout confirmation
		// function confirmLogout() {
        // return confirm("Are you sure to Logout?");
    	// }