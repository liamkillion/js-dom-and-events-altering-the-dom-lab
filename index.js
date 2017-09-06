function removeDowntown(){
  document.querySelector('ul li').remove()
}

function hideCompanyStrategy(){
  document.querySelector('#company-strategy').style.visibility = 'hidden'
}

function showCompanyStrategy(){
  document.querySelector('#company-strategy').style.visibility = 'visible'
}

function changeTitle(title){
  document.querySelector('h1').innerHTML = title
}
