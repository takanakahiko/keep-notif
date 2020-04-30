const { Octokit } = require("@octokit/rest");

const org = process.env.ORG_NAME
const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN

(async()=>{
    const octokit = new Octokit({auth: token});
    const ret = await octokit.paginate(octokit.activity.listWatchedReposForAuthenticatedUser)
    const orgsRepos = ret.filter(repo => repo.owner.login == org)
    for(let repo of orgsRepos){
        console.log(`${repo.owner.login} / ${repo.name}`);
        await octokit.activity.setRepoSubscription({
            owner: repo.owner.login,
            repo: repo.name,
            subscribed: false
        });
    }
})()