import StartServer from "./server";

async function main() {
    try {
        await StartServer()
    }
    catch(error) {
        console.error(error)
    }
}

main()