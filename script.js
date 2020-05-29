var slideno = 1;
traverse(slideno);


function identify(n) 
{
	traverse(slideno += n);
}


function traverse(slide) {
	var c;
	c = document.getElementsByClassName('timg');
	if (slide < 1) 
	{
   		slideno = c.length ;
	}
	if (slide > c.length)
	{
		slideno = 1;
	}
	for (var i = 0 ; i < c.length ; i++)
	{
		c[i].style.display = 'none';
	}
	c[slideno - 1].style.display = 'block';
}


