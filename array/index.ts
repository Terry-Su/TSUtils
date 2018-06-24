import { notNil } from '../type/index';

/**
 * // Index
 */
export const getLastIndex = ( array: any[] ): number => {
  return array.length - 1
}


export const findFirstIndex = ( element: any, array: any[] ): number | any => {
	for ( let i = 0; i < array.length; i++ ) {
		const potential = array[ i ]
		if ( potential === element ) {
			return i
		}
	}
	return null
}

export const findLastIndex = ( element: any, array: any[] ): number | any => {
  let res = null
  
	for ( let i = 0; i < array.length; i++ ) {
		const potential = array[ i ]
		if ( potential === element ) {
			res = i
		}
	}
	return res
}

/**
 * // Compare
 */
export function isFirstIndex( index: number ): boolean {
  return index === 0
}
export const notFirstIndex = ( index: number ): boolean => !isFirstIndex( index )
export function isLastIndex( index: number, array: any[] ): boolean {
  return index === array.length - 1
}
export const notLastIndex = ( index: number, array: any[] ): boolean => !isLastIndex( index, array )


export const isEmpty = ( array: any ): boolean => array > 0
export const notEmpty = ( array: any ): boolean => !isEmpty( array )

export const isFirstElement = ( element: any, array: any[]): boolean => {
  const index = findFirstIndex( element, array )
	return isFirstIndex( index )
}
export const notFirstElement = ( element: any, array: any[] ): boolean => !isFirstElement( element, array )
export const isLastElement = ( element: any, array: any[]): boolean => {
  const index = findLastIndex( element, array )
	return isLastIndex( index, array )
}
export const notLastElement = ( element: any, array: any[] ): boolean => !isLastElement( element, array )

/**
 * // Delete
 */
export function removeElement( array: any[], element: any ) {
	const index: number = findFirstIndex( array, element )

	if ( notNil( index ) ) {
		array.splice( index, 1 )
	}
}

