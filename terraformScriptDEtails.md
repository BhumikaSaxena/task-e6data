POC:
The terraform script has the resources which will connect to the private endpoints to AWS.

The source of the data transfer is an on-premises or remote VPC with an NFS data source. The destination of the data transfer is an Amazon VPC that has access to Amazon S3, Amazon Elastic File System (Amazon EFS), or Amazon FSx(we can reverse the source and destination).

The DataSync agent is on the source network. 

Steps to perform:

    Creating a Virtual private network endpoint for DataSync.
    the subnet associated with the VPC endpoint has at least four IP addresses available for DataSync execution endpoints.
    Configure a security group for the DataSync VPC endpoints. The security group allow:

Inbound traffic on TCP port 443 to the endpoint
Outbound ephemeral traffic
Inbound traffic on TCP port range 1024-1062 to the destination VPC endpoint
To open an AWS Support channel, allow inbound traffic on TCP port 22
Set up the network connection between the source and destination environments
For this configuration, the data transfer can be from a source on-premises environment to a destination private VPC. Or, the data transfer can be between private VPCs that are in different AWS Regions or belong to different AWS accounts.

there's a firewall between the source and destination networks, where:

Traffic on TCP port 443 to the destination VPC endpoint subnets
Traffic on TCP port range 1024-1062 to the destination VPC endpoint
To open an AWS Support channel, allow traffic on TCP port 22
Confirm that all security groups and firewalls allow ephemeral outbound traffic or the use of connection tracking tools.

using an Amazon Elastic Compute Cloud (Amazon EC2) instance to activate the DataSync agent:

using an Amazon EC2 instance to activate the agent, and attaching the IAM role with the instance profile.

Activate the DataSync agent:

For --activation-key, enter the activation key 
For --vpc-endpoint-id, enter the "VpcEndpointId" 
For --security-group-arns, enter the GroupID 
For --subnet-arns, enter the SubnetArn 


After the DataSync agent is activated,  the DataSync console can be used to create locations and tasks for  data transfers.
