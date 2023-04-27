const studentMd = require('../model/student.js');

exports.GET = async (req, res, next) => {
    try {
        let list = await studentMd.find().lean();

        if (list) {
            return res.status(200).json({
                data: list,
                msg: "Thành công !"
            })
        }

        return res.status(204).json({
            msg: "Không có dữ liệu !"
        })

    } catch (error) {
        return res.status(500).json({
            msg: error.message,
        })
    }
}

exports.POST = async (req, res, next) => {
    try {

        let name = req.body.name;
        let mark = req.body.mark;
        let img = req.body.img;

        let student = new studentMd({
            name: name,
            mark: mark,
            img: img,
        })

        if (student) {
            await student.save();
            return res.status(201).json({
                data: student,
                msg: "Thành công !"
            })
        }

        return res.status(204).json({
            msg: "Không có dữ liệu !"
        })

    } catch (error) {
        return res.status(500).json({
            msg: error.message,
        })
    }
}

exports.DELETE = async (req, res, next) => {
    try {
        let id = req.params.id;

        await studentMd.deleteOne({ _id: id });
        return res.status(200).json({
            msg: "Thành công !"
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message,
        })
    }
}

exports.PATCH =async (req, res, next) => {
    try {
        let id = req.params.id;
        let name = req.body.name;
        let mark = req.body.mark;
        let img = req.body.img;
        let userEdit = await studentMd.findOne({ _id: id });

        if(userEdit){
            await userEdit.updateOne({
                name: name,
                mark: mark,
                img: img,
            })

            return res.status(200).json({
                msg: "Thành công !"
            })
        }

        return res.status(204).json({
            msg: "Không có dữ liệu !"
        })
       
    } catch (error) {
        return res.status(500).json({
            msg: error.message,
        })
    }
}