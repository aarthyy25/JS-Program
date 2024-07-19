// Filter Method
let colors=["green","Blue","White"]
let colorsfind=colors.filter(colors=>colors.length<7)
console.log("Array after using filter method for specific cndition is",colorsfind)


// Find Method
let names=["aarthi","maha","vaishnavi","Priya","nisha"]
console.log("String ends with a using find method is",names.find(names=>names.endsWith("a")))


// Map Method
let string=["aarthi","maha","vaishnavi","Priya","nisha"]
console.log("String in upper case using map method is",string.map(string=>string.toUpperCase()))


// Removing an item in specific position
let str=[87,34,90,23,76,45,87,59,71,79];
str.splice(5,1);
console.log("Array after removing at specific position is",str);


// Inserting an item in a specific position
str.splice(4,0,75);
console.log("Array after pushing at specific position is",str);


// Comparing two arrays of equality
let animal1=["Dog","Cat","Monkey","Cow"]
let animal2=["Cow","Dog","Monkey","Cat"]
let array5=[]
let flag1=0;
let flag2=0;
for(let i=0;i<animal1.length;i++){
    let flag1=0;
    let flag2=0;
    for(let j=0;j<animal2.length;j++){
        if(animal1[i]==animal2[j]){
            flag1=1;
            break;
        }
        else{
            continue;
        }
    }
    if(flag1==1){
        continue;
    }
    else{
        flag2=1
        break;
    }
}
if(flag2==1){
    console.log("Two arrays are not equal.")
}
else{
    console.log("Two arrays are equal");
}


// Merging two arrays
let fruit1=["banana","grapes","Apple","Pomegranate","Orange"]
let fruit2=["Kiwi","Pear","Dragon fruit","Fig"]
console.log("Array after merging method ",fruit1.concat(fruit2));

