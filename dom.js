//by help of id dom manipulation
document.getElementById('add-border').addEventListener('click',function(){
    document.getElementById('friend-container').style.border='3px solid green'
    document.getElementById('friend-container').style.padding='10px '
    document.getElementById('friend-container').style.backgroundColor='yellow'
})

//by help of class name dom manipulation
document.getElementById('add-background').addEventListener('click',function(){
   const friends=document.getElementsByClassName('friend')

    for(let friend of friends){
        friend.style.backgroundColor='lightblue'
        // console.log(friend)
    } 
})

function addBackground(){
    const friends=document.getElementsByClassName('friend')

    for(let friend of friends){
        friend.style.backgroundColor='lightgreen'
        // console.log(friend)
    } 
}

//adding new friend into friend-container
function addNewFriend(){
    //get the element where we can add new child
    const friendContainer=document.getElementById('friend-container')
    //create new element 'div' element type
    const newFriend=document.createElement('div')
    //add class name to newly created element
    newFriend.classList.add('friend')
    //add value to newly created 'newFriend' element
    newFriend.innerHTML=`
        <h3 class="friend-name">new-friend</h3>
        <p>Eos asperiores accusamus sit enim.</p>
    `
    //append new element to parent element
    friendContainer.appendChild(newFriend)
}