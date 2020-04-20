Vue.component("tabs",{
	template:
	`<div class="tab">
		<ul>
			<li v-for="tab in tabs"
				{{tab.name}}
			</li>
		</ul>
		<div class="details">
			<slot></slot>
		</div>
	</div>
	`,
	data: function(){
		return {
			tabs:[]
		}
	},
	created: function(){
		/*console.log(this.$children);*/
		this.tabs = this.$children;
console.log(tabs);
	}
});
Vue.component("tab",{
	template:`
	`,

	props: ['name',"selected"]
});