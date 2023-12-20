# Codecept JS POC

## Steps to run

1. Install the dependencies in the 2 test folders. i.e., ***auto_heal*** and ***co_location_report***,  by running:

    ```shell
    npm i
    ```

2. To Enable Open AI integration with test cases, set env_variable: `OPENAI_API_KEY` with the API Key from Open AI:

    ```powershell
    [Environment]::SetEnvironmentVariable("OPENAI_API_KEY", "YourApiKeyHere", [System.EnvironmentVariableTarget]::User)
    ```

    Test if the variable is set correctly by running below command:

    ```powershell
    echo $OPENAI_API_KEY 
    ```

3. Any test can be run by going to the respective folders and running the following command:

    ```shell
    npx codeceptjs run --steps
    ```

4. Run the static page on localhost port 8080 for testing ***auto_heal*** test case. Commands:

    ```shell
    docker build -t autoheal_static_page .
    docker run -p 8080:80 autoheal_static_page
    ```
