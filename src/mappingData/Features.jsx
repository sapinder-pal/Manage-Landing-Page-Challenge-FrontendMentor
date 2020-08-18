import React from 'react';

export const FeaturesData = [
	{
		title: 'Track company-wide progress',
		description: `See how your day-to-day tasks fit into the wider vision. Go from 
		tracking progress at the milestone level all the way done to the 
		smallest of details. Never lose sight of the bigger picture again.`
	},
	{
		title: 'Advanced built-in reports',
		description: `Set internal delivery estimates and track progress toward company 
		goals. Our customisable dashboard helps you build out the reports 
		you need to keep key stakeholders informed.`
	},
	{
		title: 'Everything you need in one place',
		description: `Stop jumping from one service to another to communicate, store files, 
		track tasks and share documents. Manage offers an all-in-one team 
		productivity solution.`
	}
]


export function MapFeature(props, index) {
	return (
		<div className={'feature-' + (index+1)} key={ index }>
			
			<h3 className='title'>{ props.title }</h3>
			
			<p className='description'>{ props.description }</p>

		</div>
	)
}