(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{ace6:function(a,o,t){"use strict";t.r(o);var s=function(){var a=this,o=a.$createElement,t=a._self._c||o;return t("div",{staticClass:"col-12"},[t("q-item-label",{staticClass:"text-h5"},[a._v("\n    Perfil dos produtos\n  ")]),t("div",{staticClass:"row q-mt-lg"},[t("div",{staticClass:"col-12 col-sm"},[t("q-select",{ref:"genero",staticClass:"q-mr-lg",attrs:{options:a.listaProdutoGenero,label:"Genero",rules:[a.requiredSelect]},model:{value:a.cadastroProduto.genero,callback:function(o){a.$set(a.cadastroProduto,"genero",o)},expression:"cadastroProduto.genero"}})],1),t("div",{staticClass:"col-12 col-sm"},[t("q-select",{ref:"fxEtaria",attrs:{options:a.listaProdutoFaixaEtaria,label:"Faixa etária",rules:[a.requiredSelect]},model:{value:a.cadastroProduto.fx_etaria,callback:function(o){a.$set(a.cadastroProduto,"fx_etaria",o)},expression:"cadastroProduto.fx_etaria"}})],1)]),t("div",{staticClass:"row q-mt-lg"},[t("div",{staticClass:"col-12 col-sm"},[t("q-select",{ref:"estacaoAno",staticClass:"q-mr-lg",attrs:{options:a.listaProdutoEstacaoAno,label:"Estação do ano",rules:[a.requiredSelect]},model:{value:a.cadastroProduto.estacao_ano,callback:function(o){a.$set(a.cadastroProduto,"estacao_ano",o)},expression:"cadastroProduto.estacao_ano"}})],1),t("div",{staticClass:"col-12 col-sm"},[t("q-select",{ref:"necessidade",attrs:{options:a.listaProdutoNecessidade,label:"Necessidade",rules:[a.requiredSelect]},model:{value:a.cadastroProduto.necessidade,callback:function(o){a.$set(a.cadastroProduto,"necessidade",o)},expression:"cadastroProduto.necessidade"}})],1)]),t("div",{staticClass:"row q-mt-lg"},[t("div",{staticClass:"col-12 col-sm"},[t("q-select",{ref:"cor",staticClass:"q-mr-lg",attrs:{options:a.listaProdutoCor,label:"Cor",rules:[a.requiredSelect]},model:{value:a.cadastroProduto.cor,callback:function(o){a.$set(a.cadastroProduto,"cor",o)},expression:"cadastroProduto.cor"}})],1),t("div",{staticClass:"col-12 col-sm"},[t("q-select",{ref:"tipoEstampa",attrs:{options:a.listaProdutoTipoEstampa,label:"Tipo de estampa",rules:[a.requiredSelect]},model:{value:a.cadastroProduto.tipo_estampa,callback:function(o){a.$set(a.cadastroProduto,"tipo_estampa",o)},expression:"cadastroProduto.tipo_estampa"}})],1)]),t("div",{staticClass:"row q-mt-lg"},[t("div",{staticClass:"col-12 col-sm"},[t("q-select",{ref:"tipoTenis",staticClass:"q-mr-lg",attrs:{options:a.listaProdutoTipoTenis,label:"Tipo de calçado",rules:[a.requiredSelect]},model:{value:a.cadastroProduto.tipo_tenis,callback:function(o){a.$set(a.cadastroProduto,"tipo_tenis",o)},expression:"cadastroProduto.tipo_tenis"}})],1),t("div",{staticClass:"col-12 col-sm"},[t("q-select",{ref:"tamanhoCamisa",attrs:{options:a.listaProdutoTamanhoCamisa,label:"Tamanho da camisa",rules:[a.requiredSelect]},model:{value:a.cadastroProduto.tamanho_camisa,callback:function(o){a.$set(a.cadastroProduto,"tamanho_camisa",o)},expression:"cadastroProduto.tamanho_camisa"}})],1)]),t("div",{staticClass:"row q-mt-lg"},[t("div",{staticClass:"col-12 col-sm"},[t("q-select",{ref:"tamanhoSapato",staticClass:"q-mr-lg",attrs:{options:a.listaProdutoTamanhoSapato,label:"Tamanho do sapato",rules:[a.requiredSelect]},model:{value:a.cadastroProduto.tamanho_sapato,callback:function(o){a.$set(a.cadastroProduto,"tamanho_sapato",o)},expression:"cadastroProduto.tamanho_sapato"}})],1),t("div",{staticClass:"col-12 col-sm"},[t("q-select",{ref:"tipoEstilo",attrs:{options:a.listaProdutoTipoEstilo,label:"Tipo de estilo",rules:[a.requiredSelect]},model:{value:a.cadastroProduto.tipo_estilo,callback:function(o){a.$set(a.cadastroProduto,"tipo_estilo",o)},expression:"cadastroProduto.tipo_estilo"}})],1)]),t("div",{staticClass:"row q-mt-lg"},[t("div",{staticClass:"col-12 col-sm"},[t("q-select",{ref:"tamanhoCalca",staticClass:"q-mr-lg",attrs:{options:a.listaProdutoTamanhoCalca,label:"Tamanho da calça",rules:[a.requiredSelect]},model:{value:a.cadastroProduto.tamanho_calca,callback:function(o){a.$set(a.cadastroProduto,"tamanho_calca",o)},expression:"cadastroProduto.tamanho_calca"}})],1),t("div",{staticClass:"col-12 col-sm"},[t("q-input",{ref:"observacoes",attrs:{label:"Observações",rules:[a.required]},model:{value:a.cadastroProduto.observacoes,callback:function(o){a.$set(a.cadastroProduto,"observacoes",o)},expression:"cadastroProduto.observacoes"}})],1)]),t("div",{staticClass:"col-12 col-sm q-mt-xl"},[t("q-btn",{attrs:{color:"black",label:"Salvar"},on:{click:function(o){return a.confirmaSalvar()}}})],1),t("q-dialog",{attrs:{persistent:""},model:{value:a.confirm,callback:function(o){a.confirm=o},expression:"confirm"}},[t("q-card",[t("q-card-section",{staticClass:"row items-center"},[t("q-avatar",{attrs:{icon:"announcement",color:"primary","text-color":"white"}}),t("span",{staticClass:"q-ml-sm"},[a._v("Deseja salvar os dados?")])],1),t("q-card-actions",{attrs:{align:"right"}},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Sim",color:"primary"},on:{click:function(o){return a.salvar()}}}),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Não",color:"primary"}})],1)],1)],1)],1)},e=[],r=t("bc3a"),i=t.n(r);const l=["escola","passear","sair a noite","social","banho"],c=["menino","menina"],d=["branco","vermelho","azul","rosa","amarelo","verde","marrom","laranja","lilas"],n=["liso","desenho","tropical","tie dye","zebra","onça","poá","listrado","floral"],u=["esportivo","casual","sneaker","sapatenis"],m=["classico","criativo","elegante","esportivo","moderno","romantico","rock & punk","geek"],p=["13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36"],h=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"],f=["P","M","G","EG"],v=["PP","P","M","G","GG"],P=["primavera","verao","outono","inverno"],b=[],q=["bebe","crianca","adolescente","preAdolescente"],_={necessidade:"",genero:"",cor:"",tipo_estampa:"",tipo_tenis:"",tipo_estilo:"",tamanho_sapato:"",tamanho_calca:"",tamanho_camisa:"",tamanho_tenis:"",estacao_ano:"",frequencia:"Não definido",n_quero:"Não definido",fx_taria:"",observacoes:""};var g={name:"personalizarBag",data(){return{listaProdutoNecessidade:l,listaProdutoGenero:c,listaProdutoCor:d,listaProdutoTipoEstampa:n,listaProdutoTipoEstilo:m,listaProdutoTipoTenis:u,listaProdutoTamanhoSapato:p,listaProdutoTamanhoTenis:h,listaProdutoTamanhoCalca:f,listaProdutoTamanhoCamisa:v,listaProdutoEstacaoAno:P,listaProdutoNaoQuero:b,listaProdutoFaixaEtaria:q,cadastroProduto:_,confirm:!1,baseUrl:"https://power-bag-back.herokuapp.com",token:localStorage.getItem("token"),clienteId:localStorage.getItem("clienteId")}},mounted(){this.buscarDados(),this.confirmarUsuarioAdmin()},methods:{requiredSelect(a){return a&&""!=a.length||"O campo deve ser preenchido"},required(a){return a&&a.length>0||"O campo deve ser preenchido"},confirmaSalvar(){this.confirm=!0},salvar(){if(this.$q.loading.show(),this.$refs.genero.validate(),this.$refs.fxEtaria.validate(),this.$refs.estacaoAno.validate(),this.$refs.necessidade.validate(),this.$refs.cor.validate(),this.$refs.tipoEstampa.validate(),this.$refs.tipoTenis.validate(),this.$refs.tamanhoCamisa.validate(),this.$refs.tamanhoSapato.validate(),this.$refs.tipoEstilo.validate(),this.$refs.tamanhoCalca.validate(),this.$refs.observacoes.validate(),this.$refs.genero.hasError||this.$refs.fxEtaria.hasError||this.$refs.estacaoAno.hasError||this.$refs.necessidade.hasError||this.$refs.cor.hasError||this.$refs.tipoEstampa.hasError||this.$refs.tipoTenis.hasError||this.$refs.tamanhoCamisa.hasError||this.$refs.tamanhoSapato.hasError||this.$refs.tipoEstilo.hasError||this.$refs.tamanhoCalca.hasError||this.$refs.observacoes.hasError)return this.$q.dialog({title:"Atenção",message:"Dados preenchidos incorretamente."}),void this.$q.loading.hide();try{i()({method:"POST",url:`${this.baseUrl}/perfil`,headers:{Authorization:`${this.token}`},data:{genero:this.cadastroProduto.genero,fx_etaria:this.cadastroProduto.fx_etaria,estacao_ano:this.cadastroProduto.estacao_ano,necessidade:this.cadastroProduto.necessidade,cor:this.cadastroProduto.cor,tipo_estampa:this.cadastroProduto.tipo_estampa,tipo_tenis:this.cadastroProduto.tipo_tenis,tamanho_camisa:this.cadastroProduto.tamanho_camisa,tamanho_sapato:this.cadastroProduto.tamanho_sapato,tipo_estilo:this.cadastroProduto.tipo_estilo,tamanho_calca:this.cadastroProduto.tamanho_calca,observacoes:this.cadastroProduto.observacoes}}),setTimeout((()=>{this.$q.dialog({title:"Parabéns!",message:"Dados salvo com sucesso!"}),this.$q.loading.hide(),this.buscarDados()}),500)}catch(a){this.$q.dialog({title:"Atenção",message:"Erro ao tentar salvar."}),this.$q.loading.hide()}},async buscarDados(){const a=await i()({method:"GET",url:`${this.baseUrl}/perfil`,headers:{Authorization:`${this.token}`}}),o=Object.assign(this.cadastroProduto,a.data);this.cadastroProduto=o},confirmarUsuarioAdmin(){let a=localStorage.getItem("admin");"true"===a&&(localStorage.clear(),this.$router.push({name:"home"}))}}},$=g,C=t("2877"),E=t("0170"),x=t("ddd8"),k=t("27f9"),S=t("9c40"),T=t("24e8"),w=t("f09f"),A=t("a370"),Q=t("cb32"),G=t("4b7e"),N=t("7f67"),D=t("eebe"),I=t.n(D),y=Object(C["a"])($,s,e,!1,null,null,null);o["default"]=y.exports;I()(y,"components",{QItemLabel:E["a"],QSelect:x["a"],QInput:k["a"],QBtn:S["a"],QDialog:T["a"],QCard:w["a"],QCardSection:A["a"],QAvatar:Q["a"],QCardActions:G["a"]}),I()(y,"directives",{ClosePopup:N["a"]})}}]);