//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder.Embedded v10.2.1+25a20cf
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Linq.Expressions;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PublishedCache;
using Umbraco.Cms.Infrastructure.ModelsBuilder;
using Umbraco.Cms.Core;
using Umbraco.Extensions;

namespace Umbraco.Cms.Web.Common.PublishedModels
{
	/// <summary>subcontent2</summary>
	[PublishedModel("subcontent2")]
	public partial class Subcontent2 : PublishedContentModel, IHeaderProperties, ISiteinfoProperties
	{
		// helpers
#pragma warning disable 0109 // new is redundant
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		public new const string ModelTypeAlias = "subcontent2";
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[return: global::System.Diagnostics.CodeAnalysis.MaybeNull]
		public new static IPublishedContentType GetModelContentType(IPublishedSnapshotAccessor publishedSnapshotAccessor)
			=> PublishedModelUtility.GetModelContentType(publishedSnapshotAccessor, ModelItemType, ModelTypeAlias);
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[return: global::System.Diagnostics.CodeAnalysis.MaybeNull]
		public static IPublishedPropertyType GetModelPropertyType<TValue>(IPublishedSnapshotAccessor publishedSnapshotAccessor, Expression<Func<Subcontent2, TValue>> selector)
			=> PublishedModelUtility.GetModelPropertyType(GetModelContentType(publishedSnapshotAccessor), selector);
#pragma warning restore 0109

		private IPublishedValueFallback _publishedValueFallback;

		// ctor
		public Subcontent2(IPublishedContent content, IPublishedValueFallback publishedValueFallback)
			: base(content, publishedValueFallback)
		{
			_publishedValueFallback = publishedValueFallback;
		}

		// properties

		///<summary>
		/// imagelist4
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("imagelist4")]
		public virtual global::System.Collections.Generic.IEnumerable<global::Umbraco.Cms.Web.Common.PublishedModels.Multiinfo> Imagelist4 => this.Value<global::System.Collections.Generic.IEnumerable<global::Umbraco.Cms.Web.Common.PublishedModels.Multiinfo>>(_publishedValueFallback, "imagelist4");

		///<summary>
		/// Header Image: Enter the image for the header
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("headerImage")]
		public virtual global::Umbraco.Cms.Core.Models.MediaWithCrops HeaderImage => global::Umbraco.Cms.Web.Common.PublishedModels.HeaderProperties.GetHeaderImage(this, _publishedValueFallback);

		///<summary>
		/// Subtitle: Enter the subtitle for this page
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("subtitle")]
		public virtual string Subtitle => global::Umbraco.Cms.Web.Common.PublishedModels.HeaderProperties.GetSubtitle(this, _publishedValueFallback);

		///<summary>
		/// Title: Enter a title for this Page
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("title")]
		public virtual string Title => global::Umbraco.Cms.Web.Common.PublishedModels.HeaderProperties.GetTitle(this, _publishedValueFallback);

		///<summary>
		/// imag1
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("imag1")]
		public virtual global::Umbraco.Cms.Core.Models.MediaWithCrops Imag1 => global::Umbraco.Cms.Web.Common.PublishedModels.SiteinfoProperties.GetImag1(this, _publishedValueFallback);

		///<summary>
		/// imagelist1
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("imagelist1")]
		public virtual global::System.Collections.Generic.IEnumerable<global::Umbraco.Cms.Web.Common.PublishedModels.Singleimagewithurl> Imagelist1 => global::Umbraco.Cms.Web.Common.PublishedModels.SiteinfoProperties.GetImagelist1(this, _publishedValueFallback);

		///<summary>
		/// imagelist2
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("imagelist2")]
		public virtual global::System.Collections.Generic.IEnumerable<global::Umbraco.Cms.Web.Common.PublishedModels.Singleimagewithurl> Imagelist2 => global::Umbraco.Cms.Web.Common.PublishedModels.SiteinfoProperties.GetImagelist2(this, _publishedValueFallback);

		///<summary>
		/// imagelist3
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("imagelist3")]
		public virtual global::System.Collections.Generic.IEnumerable<global::Umbraco.Cms.Web.Common.PublishedModels.Multiinfo> Imagelist3 => global::Umbraco.Cms.Web.Common.PublishedModels.SiteinfoProperties.GetImagelist3(this, _publishedValueFallback);

		///<summary>
		/// label1
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("label1")]
		public virtual string Label1 => global::Umbraco.Cms.Web.Common.PublishedModels.SiteinfoProperties.GetLabel1(this, _publishedValueFallback);

		///<summary>
		/// label2
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("label2")]
		public virtual string Label2 => global::Umbraco.Cms.Web.Common.PublishedModels.SiteinfoProperties.GetLabel2(this, _publishedValueFallback);

		///<summary>
		/// label3
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("label3")]
		public virtual string Label3 => global::Umbraco.Cms.Web.Common.PublishedModels.SiteinfoProperties.GetLabel3(this, _publishedValueFallback);

		///<summary>
		/// list1
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("list1")]
		public virtual global::Umbraco.Cms.Core.Models.Blocks.BlockListModel List1 => global::Umbraco.Cms.Web.Common.PublishedModels.SiteinfoProperties.GetList1(this, _publishedValueFallback);

		///<summary>
		/// list2
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("list2")]
		public virtual global::Umbraco.Cms.Core.Models.Blocks.BlockListModel List2 => global::Umbraco.Cms.Web.Common.PublishedModels.SiteinfoProperties.GetList2(this, _publishedValueFallback);

		///<summary>
		/// main banner
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("mainBanner")]
		public virtual global::Umbraco.Cms.Core.Models.MediaWithCrops MainBanner => global::Umbraco.Cms.Web.Common.PublishedModels.SiteinfoProperties.GetMainBanner(this, _publishedValueFallback);

		///<summary>
		/// paragraph1
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("paragraph1")]
		public virtual global::Umbraco.Cms.Core.Strings.IHtmlEncodedString Paragraph1 => global::Umbraco.Cms.Web.Common.PublishedModels.SiteinfoProperties.GetParagraph1(this, _publishedValueFallback);

		///<summary>
		/// paragrpagh2
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "10.2.1+25a20cf")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("paragrpagh2")]
		public virtual string Paragrpagh2 => global::Umbraco.Cms.Web.Common.PublishedModels.SiteinfoProperties.GetParagrpagh2(this, _publishedValueFallback);
	}
}
