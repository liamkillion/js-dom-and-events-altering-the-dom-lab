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
      expect(document.querySelector('body').innerHTML).to.include('Go get it!')
      hideCompanyStrategy()
      expect(document.querySelector('body').innerHTML).to.include('Go get it!')
    })
  })

  describe('displayCompanyStrategy()', () => {
    it('makes the company strategy visible', () => {
      hideCompanyStrategy()
      showCompanyStrategy()
      expect(document.querySelector('body').innerHTML).to.include('Go get it!')
    })
  })

  describe('changeTitle(title)', () => {
    it('makes the text in the h1 to the argument', () => {
      changeTitle("Not your grandfather's admin")
      expect(document.querySelector('h1').innerHTML).to.include("Not your grandfather's admin")
    })
  })
})
