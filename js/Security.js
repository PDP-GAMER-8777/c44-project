class Security {

    constructor(){

        // Add code to create the input and button elements
    this.accees1=createInput("code1")
    this.accees1.position(100,90)
    this.accees1.style("background","white") 

    this.button1=createButton("check")
    this.button1.position(100,120)
    this.button1.style("background","Lightgrey") 

    this.accees2=createInput("code2")
    this.accees2.position(700,190)
    this.accees2.style("background","white") 

    this.button2=createButton("check")
    this.button2.position(700,220)
    this.button2.style("background","Lightgrey") 

    this.accees3=createInput("code3")
    this.accees3.position(100,290)
    this.accees3.style("background","white") 

    this.button3=createButton("check")
    this.button3.position(100,320)
    this.button3.style("background","Lightgrey") 



    }
    


    display(){

        // Add code to make the buttons function as expected
       this.button1.mousePressed(()=>{
           if(system.authenticate(this.acceescode1,this.accees.value())){
               this.button1.hide()
               this.accees1.hide()
       }
       this.button1.mousePressed(()=>{
        if(system.authenticate(this.acceescode2,this.accees2.value())){
            this.button2.hide()
            this.accees2.hide()

       }
       this.button1.mousePressed(()=>{
        if(system.authenticate(this.acceescode3,this.accees3.value())){
            this.button3.hide()
            this.accees3.hide()


    }
