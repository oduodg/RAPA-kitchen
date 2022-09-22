import React from 'react'

export default function Footer() {
	return (
		<>
			<hr className='w-5/6 mx-auto mt-20' />

			<div className='flex justify-between mb-10 mx-28 mt-7'>
				<div className='flex'>
					<div id="frontend" className="ml-2 text-left mr-14">
						<p className="text-[#253554] font-medium text-base mb-2">Frontend</p>
						<p className="text-[#919BAB] font-medium text-sm">Eun Lee</p>
					</div>
					<div id="backend" className="text-left mr-14">
						<p className="text-[#253554] font-medium text-base mb-2">Backend</p>
						<p className="text-[#919BAB] font-medium text-sm">Hyunji Lee</p>
						<p className="text-[#919BAB] font-medium text-sm">Soyeon Hwang</p>
					</div>
					<div id="frontend" className="text-left mr-14">
						<p className="text-[#253554] font-medium text-base mb-2">Database</p>
						<p className="text-[#919BAB] font-medium text-sm">Taelim Son</p>
					</div>
					<div id="frontend" className="text-left mr-14">
						<p className="text-[#253554] font-medium text-base mb-2">Ops</p>
						<p className="text-[#919BAB] font-medium text-sm">HeeJae Ro</p>
						<p className="text-[#919BAB] font-medium text-sm">Jiyoon Jung</p>
					</div>
				</div>

				<div className='mt-3 mr-2 text-right'>
					<p className="text-[#253554] font-medium text-base mb-2">Kakao cloud school dev.1th</p>
					<p className="text-[#919BAB] font-medium text-sm">3-Tier container MSA Project</p>
				</div>
			</div>

		</>
	)
}
