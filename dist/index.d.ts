import { PublicArrayContainer } from '@writetome51/public-array-container';


export declare class ArrayPaginator extends PublicArrayContainer {

	itemsPerPage: number;
	readonly totalPages: number;
	readonly currentPageNumber: number;

	protected _currentPageNumber: number;
	private __itemsPerPage;



	constructor(
		data?: any[], // the actual array, represented by inherited property this.data
		__itemsPerPage?: number
	);


	getPage(pageIndex: number): any[];


	private __errorIfRequestedPageDoesNotExist;
	private __isLastPage;
}
