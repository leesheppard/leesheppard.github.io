---
title: Creating an Amazon S3 service to host images using a custom domain
date: 2016-02-04 13:48:54 +11:00
categories:
- tutorial
layout: post
---

![Pirate](http://assets.sheppard.io/characters/leesheppard_thumb_pirate.png)

I haven't found up to date instructions online that explained in a simple manner how to go about setting up a custom domain for content delivery using an S3 service from [Amazon Web Services](https://aws.amazon.com). Here is how I set mine up.

This tutorial assumes that you have already set up an account with AWS.

Let's assume also that you have a domain name already in use. And from that domain we will create a subdomain to use for supplying images to a site using this new address. For this tutorial I will use the fake names of `www.customdomain.com` and the subdomain of `images.customdomain.com` which will host our images. 

We haven't as yet created a subdomain but with the name in mind we MUST ensure that this name is used when creating a bucket in the S3 service. As we mentioned, we will use `images.customdomain.com` as our intended subdomain name. 

## Creating a bucket in Amazon S3
A bucket in the S3 service is just a fancy title for a folder on their server.

### Step 1 - Create a new bucket
After logging in to *Amazon Web Services*, select S3 from the Services drop down menu at the top left of the screen. On the following screen select the blue **Create Bucket** button left of screen. The **Bucket Name** should be the exact name of the subdomain you will be creating. Select a **Region** based on appropriate pricing and location to the majority of your audience. Finally click **Create**.

You will now be shown a screen listing all your buckets on the left and your newly created bucket should be selected. The bucket information will be on the right of the window. 

### Step 2 - Enable web hosting
To the right of the window displaying the bucket information, select **Static Web Hosting**. Check the radio button for **Enable web hosting**. This will create a publicly available location for us to use to retrieve content from. It does mean that you are providing access no differently than any other website. So for that reason you must provide an `index.html` page and an `error.html` page. This will prevent people from being able to browse/list the files in your bucket. These two pages you will need to create yourself. For now though you should type in to the fields the names that you wish to call these files when you have them ready and uploaded to the bucket. Click **Save** when you're done. 

Whilst under this section *Static Web Hosting* please take note of the second paragraph heading **Endpoint** which has a URL containing the location of the bucket online. Keep this handy as you will need it in the next procedure for creating the custom domain name. 


**Note**: the bucket domain name or endpoint will differ for the reason it will indicate the region you chose to host in. The structure will be `*bucketname.region.s3.amazonaws.com*` or in our example `*images.customdomain.com.sydney.s3.amazonaws.com*` 


### Step 3 - Make the bucket viewable with a policy
The next step is to tell Amazon that this new bucket should be available to the public. We do this by creating a bucket policy. In your current window on the right, click on the **Permissions** heading and click the **Add bucket policy** link. To add a bucket policy that makes your bucket content publicly available [follow this guide] (http://docs.aws.amazon.com/AmazonS3/latest/dev/HostingWebsiteOnS3Setup.html#step2-add-bucket-policy-make-content-public).

### Final step whilst logged in to  Amazon S3 (next is *Pointing a new custom domain*)

Upload your images through the browser or using your preferred FTP program. Don't forget to add the `index.html` and `error.html` files you need to create for the bucket as mentioned in Step 2. 

If you don’t want Google (or Google Images) to index the files in your subdomain, create a file named `robots.txt` containing the following and upload to your bucket:

```
User-agent: *
Disallow: /
```

***Next procedure...***

## Pointing a new custom domain

Most domain resellers give you very little freedom when creating domains and subdomains. Some web hosting services allow you to create subdomains through cPanel for example which is great but is painful when you need to move your website elsewhere of hosting. You can still purchase a domain name through a reseller, but you should invest in a DNS Management service to give you the flexibility to freely amend all the records for your domain/s. Companies like [DNS Made Easy](http://www.dnsmadeeasy.com) or [NO-IP](http://www.noip.com/managed-dns) are reasonably priced and have friendly user interfaces to work with. Some domain resellers charge higher fees for domain names, this usually means they provide you with a higher level of options including the ability to manage DNS entries more easily. 


### Modifying your DNS server settings

The procedures on how to do this will vary. In general the steps are:

#### Step 1
Logon to your web host control panel and select “Manage DNS Server Settings” or similar.

#### Step 2 

*The `Endpoint` URL mentioned above in Step 2 will be used here in the Value field. Keep it ready.*

Create a new CNAME entry for your domain. This example will be  `images.customdomain` and the fields to complete were:

**Name**: *images*  
**Type**: *CNAME*  
**Value**: *images.customdomain.s3.amazonaws.com.*  

The dot at the end of `images.customdomain.S3.amazonaws.com.` as our above example shows is important. Without the full stop at the end of the Value entry it will create an incorrect entry and the subdomain will not work.

# Finish
Well that is it, you should now be able to load up your new custom domain in a browser and use the location to host images for your site. If you have any suggestions or comments to improve this tutorial let me know. 