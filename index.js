function removeDowntown(){
  document.querySelector('li').remove()
}

function hideCompanyStrategy(){
  let strat = document.getElementById('company-strategy')
  strat.style.visibility = "hidden"
}

function showCompanyStrategy(){
  let strat = document.getElementById('company-strategy')
  strat.style.visibility = "visible"
}

function changeTitle(title){
  document.querySelector('h1').innerText = title
}
