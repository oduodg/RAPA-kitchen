import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Comments() {
	const [list, setList] = useState([]);

	const [nickName, setNickName] = useState("");
	const [commentMenu, setCommentMenu] = useState("");


	//const url = "https://8dba-2001-2d8-e610-f462-a87c-8255-756f-ea97.jp.ngrok.io/"; // backend server url

	/**해당 날짜 코멘트 조회 */
	useEffect(() => {
		const getComment = async () => {
			try {
				const response = await axios.get("/comment", {
					params: { menuId: 3 }
				});
				console.log(response.data);
				setList(response.data);
			} catch (e) {
				console.error(e.message);
			}
		};
		getComment();
	}, []);

	/**새로운 코멘트 POST */
	const postComment = async () => {
		try {
			const response = await axios.post("/comment", 
			{
				nickName: nickName,
				commentMenu: commentMenu
			},
			{
				params: { menuId: 3}
			});
			console.log(response);
		} catch (e) {
			console.error(e.message);
		}
	};

	/**새로운 이름(name) 입력 */
	const onChangeName = (e) => {
		setNickName(e.target.value);
	}

	/**새로운 코멘트(comment) 입력 */
	const onChangeComment = (e) => {
		setCommentMenu(e.target.value);
	}

	/**새로운 아이템(name, comment) 추가 */
	const handleSubmit = () => {

		let newItem = {
			nickName: nickName,
			commentMenu: commentMenu
		}
		
		setList([...list, newItem]);
		postComment();
		
		setNickName("");
		setCommentMenu("");
	}



	return (
		<div className="relative ml-28 mr-5 w-2/5 h-72 bg-[#ffffff] shadow-lg rounded-xl">

			<div className="flex justify-between mx-5 mt-2">
				<span className="text-[#7C889C] text-xl font-medium">Comments</span>
				<span className="text-[#7C889C] text-sm mt-1">09/28/2022</span>
			</div>
			<hr className="my-2" />

			<div id="commentList" className="h-40 overflow-y-scroll">

				{list.map((data, idx) => (
					<div className="mx-5 mb-2 text-left text-[#7C889C]" key={idx}>
						<button className="hover:cursor-default border-[#ebebeb] text-base border rounded-md w-24 text-center mr-2 font-semibold">{data.nickName}</button>
						<button className="mr-2">{data.commentMenu}</button>
					</div>
				))}

			</div>

			<div className="absolute mx-5 bottom-4">
				<input
					id="name"
					name="name"
					placeholder="name"
					value={nickName}
					onChange={onChangeName}
					className="border-[#ebebeb] border rounded-md w-24 text-center mr-2"
				/>
				<input
					id="comment"
					name="comment"
					placeholder="Type something.."
					value={commentMenu}
					onChange={onChangeComment}
					className="border-[#ebebeb] border rounded-md w-80 px-2 mr-8"
				/>
				<button
					type="submit"
					className="border-[#ebebeb] bg-[#ebebeb] border rounded-md w-20 text-[#7C889C] text-center"
					onClick={handleSubmit}
				>
					Submit</button>
			</div>
		</div>
	)
}
