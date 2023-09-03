import { CyHttpMessages } from 'cypress/types/net-stubbing'

export function hasOperationName(
	req: CyHttpMessages.IncomingHttpRequest,
	operationName: string
): boolean {
	const { body } = req
	return (
		body.hasOwnProperty('operationName') &&
		body.operationName === operationName
	)
}

export function aliasRequest(
	req: CyHttpMessages.IncomingHttpRequest,
	operationName: string
) {
	if (hasOperationName(req, operationName)) {
		req.alias = `gql${operationName}Request`
	}
}
