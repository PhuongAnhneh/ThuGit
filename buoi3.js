var object = {
    name:'Nam',
    age: 22,
    address: {
        sugar: 'Nguyễn Hoàng',
        alley: '18',
        district: 'Nam Từ Liêm',
        city:'Hà Nội'
    },
    family:[
        {
            father: {
                name: 'Minh',
                age: 40,
                job: 'Công nhân'
            }
        },
        
       {
            mother: {
                name: 'Thúy',
                age: 35,
                job: 'Nông dân'
            }
       },
        {
            borther: {
                name: 'Bắc',
                age: 10,
                job: 'học sinh cấp 1'
            }
        }
    
    ],  
}
// Lấy ra thông tin về bản thân của nam
// Nhà nam có bao nhiêu thành viên
// Lấy ra số tuổi của bố nam
// Mẹ của nam là nghề gì?
// Em Nam bao nhiêu tuổi và học lớp mấy?
// Thêm thuộc tính name là school có thuộc tính giá trị là Đại học ngoại thương
// Địa chỉ của mẹ Nam

console.log('Thong tin cua '+ object.name +':'+ object.age +' , dia chi: '+ object.address.sugar +', '+ object.address.alley +', '+ object.address.district +', '+ object.address.city);

console.log(object.family.length+1);

console.log(object.family[0].father.age);

console.log(object.family[1].mother.job);

console.log(object.family[2].borther.age, object.family[2].borther.job);

object.school = 'Đại học ngoại thương'

var diem = -1;
     (diem < 0) ? console.log('Khong hop le'):
     (0 <= diem && diem < 5) ? console.log('Kem'):
     (5 <= diem && diem < 6.5) ? console.log('Trung Binh'):
     (6.5 <= diem && diem <= 10) ? console.log('Gioi'): console.log('Khong hop le');