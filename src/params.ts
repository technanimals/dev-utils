import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';

/**
 * Fetches multiple parameters from the parameter store
 *
 * @param client - An instance of the SSM Client
 * @param stage - The stage of the environment
 * @param variables - A list of the variables you want to fetch
 * @param projectName
 * @returns
 */
export async function getParams(
  client: SSMClient,
  stage: string,
  variables: string[],
  projectName: string,
): Promise<Record<string, string>> {
  const secrets = await Promise.all(
    variables.map(async (variable) => {
      const Name = `/${stage}/${projectName}/${variable}`;
      const command = new GetParameterCommand({ Name });
      const { Parameter } = await client.send(command);
      const value = Parameter?.Value as string;

      return {
        [variable]: value,
      };
    }),
  );

  return Object.assign({}, ...secrets);
}
