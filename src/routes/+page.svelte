<script>

	export let data;
</script>

<h1 class="text-3xl">Users</h1>
<ul>
	{#each data.users as user}
	<li class="flex gap-4">
		<div>{user.name}</div>
		<div>{user.email}</div>
		<form method="post" action="?/delete">
			<input type="text" name="id" value={user.id} class="hidden" />
			<button type="submit" class="border rounded px-4 py-1 text-sm font-bold">Delete</button>

		</form>
	</li>
	{/each}
</ul>

<form method="post" action="?/add">
	<input type="text" name="name" placeholder="Name" required />
	<input type="email" name="email" placeholder="Email" required />
	<button type="submit">Add User</button>
</form>
