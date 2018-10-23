const  movieMockService  =  require('../../src/MovieService')

movieMockService.getMovies = () => {
	console.log('Mock Call for get Movies');
	return {
         id : 1,
         movie : 'IP MAN'
	};
}

movieMockService.getMoviesJestMock = jest.fn().mockReturnValue(
{
      id : 1,
      movie : 'IP MAN'
});



describe('Movie Mock Test', () =>{

    it('getMovie Mock' ,() =>{
    	
    	expect(movieMockService.getMovies()).toBeDefined();
    	expect(movieMockService.getMovies()).toMatchObject({  movie : 'IP MAN'});

        expect(movieMockService.getMoviesJestMock()).toMatchObject({  movie : 'IP MAN'});
    })


})