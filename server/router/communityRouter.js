const express = require('express');
const router = express();

const { Post } = require('../model/postSchema.js');
const { Counter } = require('../model/counterSchema.js');

router.post('/create', (req, res) => {
	Counter.findOne({ name: 'counter' })
		.exec()
		.then((doc) => {
			const PostModel = new Post({
				title: req.body.title,
				content: req.body.content,
				communityNum: doc.communityNum,
			});

			PostModel.save().then(() => {
				//update : $inc(증가), $dec(감소), $set(새로운값으로 변경)
				Counter.updateOne({ name: 'counter' }, { $inc: { communityNum: 1 } })
					.then(() => {
						res.json({ success: true });
					})
					.catch(() => res.json({ success: false }));
			});
		});
});

//read
router.get('/read', (req, res) => {
	Post.find()
		.exec()
		.then((doc) => {
			console.log(doc);
			res.json({ success: true, communityList: doc });
		})
		.catch((err) => {
			console.log(err);
			res.json({ success: false });
		});
});

//detail
router.post('/detail', (req, res) => {
	Post.findOne({ communityNum: req.body.id })
		.exec()
		.then((doc) => {
			console.log(doc);
			res.json({ success: true, community: doc });
		})
		.catch((err) => {
			console.log(err);
			res.json({ success: false });
		});
});

module.exports = router;