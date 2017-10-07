exports.index = function(req, res){
//การส่งออก ฟังก์ชัน
	let content = {
		banner:[
			{
				id:1,
				url:'//image/img-1.jpg',
				title: 'new 1'
			},
			{
				id:2,
				url:'//image/img-2.jpg',
				title: 'new 2'
			}
		]
	}

	res.json(content)
}