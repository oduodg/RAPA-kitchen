import React from 'react'

export default function Footer() {
	return (
		<>
			<hr className='mt-20 w-5/6 mx-auto' />

			<div className='flex justify-between mx-28 mt-7 mb-10'>
				<div className='flex'>
					<div id="frontend" className="ml-2 mr-14 text-left">
						<p className="text-[#253554] font-medium text-base mb-2">Frontend</p>
						<p className="text-[#919BAB] font-medium text-sm">Eun Lee</p>
					</div>
					<div id="backend" className="mr-14 text-left">
						<p className="text-[#253554] font-medium text-base mb-2">Backend</p>
						<p className="text-[#919BAB] font-medium text-sm">Hyunji Lee</p>
						<p className="text-[#919BAB] font-medium text-sm">Soyeon Hwang</p>
					</div>
					<div id="frontend" className="mr-14 text-left">
						<p className="text-[#253554] font-medium text-base mb-2">Database</p>
						<p className="text-[#919BAB] font-medium text-sm">Taelim Son</p>
					</div>
					<div id="frontend" className="mr-14 text-left">
						<p className="text-[#253554] font-medium text-base mb-2">Ops</p>
						<p className="text-[#919BAB] font-medium text-sm">Huijae No</p>
						<p className="text-[#919BAB] font-medium text-sm">Jiyoon Jung</p>
					</div>
				</div>

				<div className='mr-2 mt-3 text-right'>
					<p className="text-[#253554] font-medium text-base mb-2">Kakao cloud school dev.1th</p>
					<p className="text-[#919BAB] font-medium text-sm">3-Tier container MSA Project</p>
				</div>
			</div>

		</>
	)
}
