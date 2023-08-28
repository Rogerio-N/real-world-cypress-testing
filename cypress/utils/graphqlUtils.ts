import { CyHttpMessages } from 'cypress/types/net-stubbing'

export function hasOperationName(
	req: CyHttpMessages.IncomingHttpRequest,
	operationName: string
) {
	const { body } = req
	return (
		body.hasOwnProperty('operationName') &&
		body.operationName === operationName
	)
}
