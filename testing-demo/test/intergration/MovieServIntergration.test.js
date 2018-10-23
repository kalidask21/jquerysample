const  MovieService  =  require('../../src/MovieService');
const search = 'Mummy'

describe('Movie Service Integration' , () => {
	it('search By Name ',() => {
         MovieService.getMovie(search);
	})
})