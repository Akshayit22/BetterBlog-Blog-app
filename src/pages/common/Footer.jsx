import React from 'react'
import './Contact.css'


function Footer() {
	return (
		<div>
			<footer>
				<div class="container footerContainer">
					<div class="footerFadedText">John Doe</div>
					<div class="linkContainer">
						<div>
							<a href="#projects">Projects</a>
						</div>
						<div>
							<a href="#skills">Skills</a>
						</div>
						<div>
							<a href="#contactMe">Contact Me</a>
						</div>
					</div>
					<div class="iconContainer">
						<i class="fa-brands fa-linkedin icon"></i>
						<i class="fa-brands fa-github icon"></i>
						<i class="fa-brands fa-twitter icon"></i>
						<i class="fa-brands fa-instagram icon"></i>
						<i class="fa-regular fa-envelope icon"></i>
					</div>
				</div>
			</footer>
		</div >
	)
}

export default Footer