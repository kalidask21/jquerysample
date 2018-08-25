
class FacilitiyService {
  
   static data;
   constructor(){
       this.data = [
				  this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
				  this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
				  this.createData('Eclair', 262, 16.0, 24, 6.0),
				  this.createData('Cupcake', 305, 3.7, 67, 4.3),
				  this.createData('Gingerbread', 356, 16.0, 49, 3.9),
			];
   }

   getFacilities(){
     return this.data;
   }
   
   createData(name, calories, fat, carbs, protein) {
  		
  		let count = 0;
  		return { count, name, calories, fat, carbs, protein };
   }
}

export default FacilitiyService;
