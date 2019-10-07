---
layout: page
title: Contact
showmenu: true
---

If you need to get ahold of us you can reach out to us at [roguehacklab-hackerspace@gmail.com](mailto:roguehacklab-hackerspace@gmail.com)

<div class="row">
<div class="six columns">
		{{ include slack.html }}
	</div>
	<div class="six columns">
		<ul>
		<h2>Social Media</h2>
		{{ for sm in site.data.socialmedia }}
		  <li>
		    <a href="{{ sm.url }}">
		      {{ sm.name }}
		    </a>
		  </li>
		{{ endfor }}
		</ul>
	</div>
</div>
