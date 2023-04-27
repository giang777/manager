const studentMd = require('../model/student.js');

exports.Home = async (req, res, next) => {
    let list = await studentMd.find().lean();

    if (req.method == 'POST') {
        let name = req.body.name;
        let mark = req.body.mark;
        let img = req.files.file;
        await img.mv('./public/image/' + img.name);

        let student = new studentMd({
            name: name,
            mark: mark,
            img: './image/' + img.name,
        })

        await student.save();

        return res.redirect("/");

    }

    res.render('list', {
        list: list
    });
}

exports.Delete = async (req, res, next) => {
    if (req.method == 'POST') {
        let id = req.body.id;
        await studentMd.deleteOne({ _id: id });

        return res.redirect("/");
    }
}

exports.EditInfor = async (req, res, next) => {
    let id = req.query.id;
    let student_edit = await studentMd.findOne({ _id: id });

    res.render('edit', {
        layout: 'main',
        id: student_edit._id,
        name: student_edit.name,
        img: student_edit.img,
        mark: student_edit.mark
    })
}

exports.Edit = async (req, res, next) => {
    if (req.method == 'POST') {
        let id = req.body.id;
        let name = req.body.name;
        let mark = req.body.mark;
        let img = req.files;
        console.log(id);
        console.log(name);
        console.log(mark);
        console.log(img);
        if (img) {
            let image = img.file;
            await image.mv('./public/image/' + img.name, (err) => {
                if (err) throw err;
            })

            let student = new studentMd({
                _id: id,

            })

            await student.updateOne({
                name: name,
                mark: mark,
                img: './image/' + image.name,
            });

            return res.redirect("/");
        }

        let student = new studentMd({
            _id: id,
        })

        await student.updateOne({
            name: name,
            mark: mark,
            img: student.img,
        });

        return res.redirect("/");


    }

}

exports.Search = async (req,res,next)=>{
    let data = await studentMd.find().lean();

    let text = req.query.text;

    let list = data.filter((value)=>{
        return (value.name.toLowerCase().includes(text.toLowerCase()));
    });

    res.render('list',{
        layout:'main',
        list:list,
    })
    
}

