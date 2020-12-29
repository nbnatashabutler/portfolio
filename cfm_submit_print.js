var x = 0;
var array = Array();
function add_element_to_array()
{
array[x] = document.getElementById("text1").value;
alert("your critique reads as follows: " + " " + array[x] + " " + "confirmation number" + " " +  x);
x++;
document.getElementById("text1").value = "";
}
function display_array()
{
 var e = "<hr/>";

 for (var y=0; y<array.length; y++)
 {
 e += "Critique Number " + y + " = " + array[y] + "<br/>";
 }
 document.getElementById("Result").innerHTML = e;
}

        function printDiv() { 
            var divContents = document.getElementById("Result").innerHTML; 
            var a = window.open('', '', 'height=500, width=500'); 
            a.document.write('<html>'); 
            a.document.write('<body > <h1>Please send critques by email. Include your availability and preferred communication method if the chance to discuss an opportunity is on the table.<h1> <hr> <br> <p> nbnatashabutler@gmail.com Subject: Critique</p>'); 
            a.document.write(divContents); 
            a.document.write('</body></html>'); 
            a.document.close(); 
            a.print(); 
        }
