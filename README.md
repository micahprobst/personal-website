## Running Locally

Aight, so this might be a bit more complex for you, idk, but here the instructions:

### Step 1 - Node and Package Manager

Install node through [this]().

Then install [pnpm](), the package manager that I mainly use.

### Step 2 - Install packages

Pretty simple, just run `pnpm i` in the terminal in the root of this project.

### Step 3 - Run locally

Also simple, run `pnpm dev` and go to the link it says. It will take some time to compile initally.

## Hosting

Also simple:

1. Go to [vercel]() and log in with github
2. Create a new project and select _import with github_ or somthing like that
3. Make sure it has the permissions to view your repos and then select this one
4. It should detect everything automatically, so keep default and press deploy

That's it, should build and deploy and give you a link to view it.

### Domain Name

Last step is pointing your domain name at this new vercel host. This involves some DNS stuff that's different on every hosting platform. We're basically just rewriting the A-record of your current host to point at the vercel load balancer. (Don't worry about any of this, I can do this in 5 minutes with screen share)
