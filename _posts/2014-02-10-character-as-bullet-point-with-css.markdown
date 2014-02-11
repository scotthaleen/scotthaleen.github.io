---
layout: post
published: true
title: Character as Bullet Point with CSS
categories: ['html', 'css']
tags: 
- css
- html
style: |
       ul.broke {
          list-style: none;
          margin: 0;
       }

       ul.broke li:before {
          content: "» ";  
       }

       ul.fix {
          list-style: none;
          margin: 0;
       }       

       ul.fix li:before {
          content: "» ";  
          left: 0;
          position: absolute;
       }
       
       ul.fix li {
         overflow: visible;
         padding-left: 13px;
         position: relative;
       }

---

Recently I wanted to create a bulleted list with a unicode character as the bullet '»'.  
It seemed like something that should be pretty simple.  The mostly agrees that this is the solution

{% highlight css %}
ul {
   list-style: none;
   margin: 0;
}

ul li:before {
   content: "» ";  
}
{% endhighlight %}

<br/>
While this initially looks like it works, when an item wraps it is not aligned properly. 

<div style="background-color: #eee; padding: 10px;">
   <ul class="broke">
     <li>List Item 1</li>
     <li>List <br />Item 2</li>
     <li>List Item 3</li>
     <li>List Item 4</li>
   </ul>         
</div>
<br/>
This is the full solution to fix the wrapped text and keep it aligned properly.


{% highlight css %}

ul {
   list-style: none;
   margin: 0;
}       

ul li:before {
   content: "» ";  
   left: 0;
   position: absolute;
}

ul li {
   overflow: visible;
   padding-left: 13px;
   position: relative;
}

{% endhighlight %}

<br/>
<div style="background-color: #eee; padding: 10px;">
   <ul class="fix">
     <li>List Item 1</li>
     <li>List <br />Item 2</li>
     <li>List Item 3</li>
     <li>List Item 4</li>
   </ul>         
</div>
<br />