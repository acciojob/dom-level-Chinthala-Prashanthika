//your JS code here. If required.
 const element=document.getElementById("level");
        console.log(element,'element');
        let count=0;
        let currentElement=element;

        while(currentElement){
            count++;
            currentElement=currentElement.parentElement;
            console.log(currentElement);

        }
        alert("The level of the element is:",count);