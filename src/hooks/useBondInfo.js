import { useQuery, gql } from '@apollo/client'
import defaults from '../common/defaults'

export const useBondInfo = (depositorAddress, pollInterval = defaults.api.graphql.pollInterval) => {

	const query = gql`
		query {
			bondInfos (
				where: {
					depositor: "${depositorAddress}"
				}
			) {
					id
					depositor {
						id
					}
					payout
					vesting
					lastBlock
				}
		}
	`

	const { data, error, loading } = useQuery(
		query,
		{
   		pollInterval: pollInterval,
		},
	)

	return [data, loading, error]
}