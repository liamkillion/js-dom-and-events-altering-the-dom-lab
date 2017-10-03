const expect = chai.expect;


describe('index', () => {
  describe('removeDowntown()', () => {
    it('removes the li with downtown as text', () => {
      expect(document.querySelector('.ranked-list').innerHTML).to.include('Downtown')
      removeDowntown()
      expect(document.querySelector('.ranked-list').innerHTML).to.not.include('Downtown')
    })
  })

  describe('hideCompanyStrategy()', () => {
    it('makes the company strategy hidden', () => {
      
      hideCompanyStrategy()
      expect(document.querySelector('#company-strategy').style.visibility).to.equal('hidden')

    })
  })

  describe('displayCompanyStrategy()', () => {
    it('makes the company strategy visible', () => {
      hideCompanyStrategy()
      showCompanyStrategy()
      expect(document.querySelector('#company-strategy')).to.not.equal('hidden')
    })
  })
})
