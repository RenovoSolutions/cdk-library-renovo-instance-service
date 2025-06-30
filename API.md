# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InstanceService <a name="InstanceService" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService"></a>

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.Initializer"></a>

```typescript
import { InstanceService } from '@renovosolutions/cdk-library-renovo-instance-service'

new InstanceService(scope: Construct, id: string, props: InstanceServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps">InstanceServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps">InstanceServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.isConstruct"></a>

```typescript
import { InstanceService } from '@renovosolutions/cdk-library-renovo-instance-service'

InstanceService.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instance">instance</a></code> | <code>aws-cdk-lib.aws_ec2.Instance</code> | The underlying instance resource. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceAvailabilityZone">instanceAvailabilityZone</a></code> | <code>string</code> | The availability zone of the instance. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceCfn">instanceCfn</a></code> | <code>aws-cdk-lib.aws_ec2.CfnInstance</code> | The underlying CfnInstance resource. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceEc2PrivateDnsName">instanceEc2PrivateDnsName</a></code> | <code>string</code> | Private DNS name for this instance assigned by EC2. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceEc2PublicDnsName">instanceEc2PublicDnsName</a></code> | <code>string</code> | Public DNS name for this instance assigned by EC2. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceId">instanceId</a></code> | <code>string</code> | The instance's ID. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instancePrivateIp">instancePrivateIp</a></code> | <code>string</code> | Private IP for this instance. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceProfile">instanceProfile</a></code> | <code>aws-cdk-lib.aws_iam.CfnInstanceProfile</code> | The instance profile associated with this instance. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceRole">instanceRole</a></code> | <code>@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole</code> | The instance role associated with this instance. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.osType">osType</a></code> | <code>aws-cdk-lib.aws_ec2.OperatingSystemType</code> | The type of OS the instance is running. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup</code> | The security group associated with this instance. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceDnsName">instanceDnsName</a></code> | <code>aws-cdk-lib.aws_route53.ARecord</code> | DNS record for this instance created in Route53. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `instance`<sup>Required</sup> <a name="instance" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instance"></a>

```typescript
public readonly instance: Instance;
```

- *Type:* aws-cdk-lib.aws_ec2.Instance

The underlying instance resource.

---

##### `instanceAvailabilityZone`<sup>Required</sup> <a name="instanceAvailabilityZone" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceAvailabilityZone"></a>

```typescript
public readonly instanceAvailabilityZone: string;
```

- *Type:* string

The availability zone of the instance.

---

##### `instanceCfn`<sup>Required</sup> <a name="instanceCfn" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceCfn"></a>

```typescript
public readonly instanceCfn: CfnInstance;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnInstance

The underlying CfnInstance resource.

---

##### `instanceEc2PrivateDnsName`<sup>Required</sup> <a name="instanceEc2PrivateDnsName" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceEc2PrivateDnsName"></a>

```typescript
public readonly instanceEc2PrivateDnsName: string;
```

- *Type:* string

Private DNS name for this instance assigned by EC2.

---

##### `instanceEc2PublicDnsName`<sup>Required</sup> <a name="instanceEc2PublicDnsName" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceEc2PublicDnsName"></a>

```typescript
public readonly instanceEc2PublicDnsName: string;
```

- *Type:* string

Public DNS name for this instance assigned by EC2.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The instance's ID.

---

##### `instancePrivateIp`<sup>Required</sup> <a name="instancePrivateIp" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instancePrivateIp"></a>

```typescript
public readonly instancePrivateIp: string;
```

- *Type:* string

Private IP for this instance.

---

##### `instanceProfile`<sup>Required</sup> <a name="instanceProfile" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceProfile"></a>

```typescript
public readonly instanceProfile: CfnInstanceProfile;
```

- *Type:* aws-cdk-lib.aws_iam.CfnInstanceProfile

The instance profile associated with this instance.

---

##### `instanceRole`<sup>Required</sup> <a name="instanceRole" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceRole"></a>

```typescript
public readonly instanceRole: ManagedInstanceRole;
```

- *Type:* @renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole

The instance role associated with this instance.

---

##### `osType`<sup>Required</sup> <a name="osType" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.osType"></a>

```typescript
public readonly osType: OperatingSystemType;
```

- *Type:* aws-cdk-lib.aws_ec2.OperatingSystemType

The type of OS the instance is running.

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.securityGroup"></a>

```typescript
public readonly securityGroup: SecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup

The security group associated with this instance.

---

##### `instanceDnsName`<sup>Optional</sup> <a name="instanceDnsName" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceDnsName"></a>

```typescript
public readonly instanceDnsName: ARecord;
```

- *Type:* aws-cdk-lib.aws_route53.ARecord

DNS record for this instance created in Route53.

---


### ManagedLoggingPolicy <a name="ManagedLoggingPolicy" id="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy"></a>

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.Initializer"></a>

```typescript
import { ManagedLoggingPolicy } from '@renovosolutions/cdk-library-renovo-instance-service'

new ManagedLoggingPolicy(scope: Construct, id: string, props: ManagedLoggingPolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicyProps">ManagedLoggingPolicyProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicyProps">ManagedLoggingPolicyProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.isConstruct"></a>

```typescript
import { ManagedLoggingPolicy } from '@renovosolutions/cdk-library-renovo-instance-service'

ManagedLoggingPolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_iam.ManagedPolicy</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.property.policy"></a>

```typescript
public readonly policy: ManagedPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.ManagedPolicy

---


## Structs <a name="Structs" id="Structs"></a>

### AmiLookup <a name="AmiLookup" id="@renovosolutions/cdk-library-renovo-instance-service.AmiLookup"></a>

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-renovo-instance-service.AmiLookup.Initializer"></a>

```typescript
import { AmiLookup } from '@renovosolutions/cdk-library-renovo-instance-service'

const amiLookup: AmiLookup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.AmiLookup.property.name">name</a></code> | <code>string</code> | The name string to use for AMI lookup. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.AmiLookup.property.owners">owners</a></code> | <code>string[]</code> | The owners to use for AMI lookup. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.AmiLookup.property.windows">windows</a></code> | <code>boolean</code> | Is this AMI expected to be windows? |

---

##### `name`<sup>Required</sup> <a name="name" id="@renovosolutions/cdk-library-renovo-instance-service.AmiLookup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name string to use for AMI lookup.

---

##### `owners`<sup>Optional</sup> <a name="owners" id="@renovosolutions/cdk-library-renovo-instance-service.AmiLookup.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

The owners to use for AMI lookup.

---

##### `windows`<sup>Optional</sup> <a name="windows" id="@renovosolutions/cdk-library-renovo-instance-service.AmiLookup.property.windows"></a>

```typescript
public readonly windows: boolean;
```

- *Type:* boolean

Is this AMI expected to be windows?

---

### InstanceServiceProps <a name="InstanceServiceProps" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps"></a>

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.Initializer"></a>

```typescript
import { InstanceServiceProps } from '@renovosolutions/cdk-library-renovo-instance-service'

const instanceServiceProps: InstanceServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | The type of instance to launch. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.machineImage">machineImage</a></code> | <code>aws-cdk-lib.aws_ec2.IMachineImage</code> | AMI to launch. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.name">name</a></code> | <code>string</code> | The name of the service the instance is for. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC to launch the instance in. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether the instance could initiate connections to anywhere by default. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Select subnets only in the given AZs. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.blockDevices">blockDevices</a></code> | <code>aws-cdk-lib.aws_ec2.BlockDevice[]</code> | Specifies how block devices are exposed to the instance. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.disableInlineRules">disableInlineRules</a></code> | <code>boolean</code> | Whether to disable inline ingress and egress rule optimization for the instances security group. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.enableCloudwatchLogs">enableCloudwatchLogs</a></code> | <code>boolean</code> | Whether or not to enable logging to Cloudwatch Logs. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.enabledNoPublicIngressAspect">enabledNoPublicIngressAspect</a></code> | <code>boolean</code> | Whether or not to prevent security group from containing rules that allow access from the public internet: Any rule with a source from 0.0.0.0/0 or ::/0. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.enableNoDBPortsAspect">enableNoDBPortsAspect</a></code> | <code>boolean</code> | Whether or not to prevent security group from containing rules that allow access to relational DB ports: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.enableNoRemoteManagementPortsAspect">enableNoRemoteManagementPortsAspect</a></code> | <code>boolean</code> | Whether or not to prevent security group from containing rules that allow access to remote management ports: SSH, RDP, WinRM, WinRM over HTTPs. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.instanceRole">instanceRole</a></code> | <code>@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole</code> | The role to use for this instance. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.keyName">keyName</a></code> | <code>string</code> | Name of the SSH keypair to grant access to the instance. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.parentDomain">parentDomain</a></code> | <code>string</code> | The parent domain of the service. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | Defines a private IP address to associate with the instance. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.requireImdsv2">requireImdsv2</a></code> | <code>boolean</code> | Whether IMDSv2 should be required on this instance. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup</code> | The security group to use for this instance. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.subnetType">subnetType</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetType</code> | The subnet type to launch this service in. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.useImdsv2CustomAspect">useImdsv2CustomAspect</a></code> | <code>boolean</code> | Whether to use th IMDSv2 custom aspect provided by this library or the default one provided by AWS. |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.userData">userData</a></code> | <code>aws-cdk-lib.aws_ec2.UserData</code> | The user data to apply to the instance. |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

The type of instance to launch.

---

##### `machineImage`<sup>Required</sup> <a name="machineImage" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.machineImage"></a>

```typescript
public readonly machineImage: IMachineImage;
```

- *Type:* aws-cdk-lib.aws_ec2.IMachineImage

AMI to launch.

---

##### `name`<sup>Required</sup> <a name="name" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the service the instance is for.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC to launch the instance in.

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean

Whether the instance could initiate connections to anywhere by default.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Select subnets only in the given AZs.

---

##### `blockDevices`<sup>Optional</sup> <a name="blockDevices" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.blockDevices"></a>

```typescript
public readonly blockDevices: BlockDevice[];
```

- *Type:* aws-cdk-lib.aws_ec2.BlockDevice[]

Specifies how block devices are exposed to the instance.

You can specify virtual devices and EBS volumes

---

##### `disableInlineRules`<sup>Optional</sup> <a name="disableInlineRules" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.disableInlineRules"></a>

```typescript
public readonly disableInlineRules: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to disable inline ingress and egress rule optimization for the instances security group.

If this is set to true, ingress and egress rules will not be declared under the SecurityGroup in cloudformation, but will be separate elements.

Inlining rules is an optimization for producing smaller stack templates.
Sometimes this is not desirable, for example when security group access is managed via tags.

The default value can be overriden globally by setting the context variable '@aws-cdk/aws-ec2.securityGroupDisableInlineRules'.

---

##### `enableCloudwatchLogs`<sup>Optional</sup> <a name="enableCloudwatchLogs" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.enableCloudwatchLogs"></a>

```typescript
public readonly enableCloudwatchLogs: boolean;
```

- *Type:* boolean
- *Default:* true

Whether or not to enable logging to Cloudwatch Logs.

---

##### `enabledNoPublicIngressAspect`<sup>Optional</sup> <a name="enabledNoPublicIngressAspect" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.enabledNoPublicIngressAspect"></a>

```typescript
public readonly enabledNoPublicIngressAspect: boolean;
```

- *Type:* boolean

Whether or not to prevent security group from containing rules that allow access from the public internet: Any rule with a source from 0.0.0.0/0 or ::/0.

If these sources are used when this is enabled and error will be added to CDK metadata and deployment and synth will fail.

---

##### `enableNoDBPortsAspect`<sup>Optional</sup> <a name="enableNoDBPortsAspect" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.enableNoDBPortsAspect"></a>

```typescript
public readonly enableNoDBPortsAspect: boolean;
```

- *Type:* boolean
- *Default:* true

Whether or not to prevent security group from containing rules that allow access to relational DB ports: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server.

If these ports are opened when this is enabled an error will be added to CDK metadata and deployment and synth will fail.

---

##### `enableNoRemoteManagementPortsAspect`<sup>Optional</sup> <a name="enableNoRemoteManagementPortsAspect" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.enableNoRemoteManagementPortsAspect"></a>

```typescript
public readonly enableNoRemoteManagementPortsAspect: boolean;
```

- *Type:* boolean
- *Default:* true

Whether or not to prevent security group from containing rules that allow access to remote management ports: SSH, RDP, WinRM, WinRM over HTTPs.

If these ports are opened when this is enabled an error will be added to CDK metadata and deployment and synth will fail.

---

##### `instanceRole`<sup>Optional</sup> <a name="instanceRole" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.instanceRole"></a>

```typescript
public readonly instanceRole: ManagedInstanceRole;
```

- *Type:* @renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole
- *Default:* A new ManagedInstanceRole will be created for this instance

The role to use for this instance.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Name of the SSH keypair to grant access to the instance.

---

##### `parentDomain`<sup>Optional</sup> <a name="parentDomain" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.parentDomain"></a>

```typescript
public readonly parentDomain: string;
```

- *Type:* string

The parent domain of the service.

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

Defines a private IP address to associate with the instance.

---

##### `requireImdsv2`<sup>Optional</sup> <a name="requireImdsv2" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.requireImdsv2"></a>

```typescript
public readonly requireImdsv2: boolean;
```

- *Type:* boolean
- *Default:* true

Whether IMDSv2 should be required on this instance.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: SecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup
- *Default:* A new SecurityGroup will be created for this instance

The security group to use for this instance.

---

##### `subnetType`<sup>Optional</sup> <a name="subnetType" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.subnetType"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetType
- *Default:* ec2.SubnetType.PRIVATE_WITH_NAT

The subnet type to launch this service in.

---

##### `useImdsv2CustomAspect`<sup>Optional</sup> <a name="useImdsv2CustomAspect" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.useImdsv2CustomAspect"></a>

```typescript
public readonly useImdsv2CustomAspect: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to use th IMDSv2 custom aspect provided by this library or the default one provided by AWS.

Turned on by default otherwise we need to apply a feature flag to every project using an instance or
apply a breaking change to instance construct ids.

> [https://github.com/jericht/aws-cdk/blob/56c01aedc4f745eec79409c99b749f516ffc39e1/packages/%40aws-cdk/aws-ec2/lib/aspects/require-imdsv2-aspect.ts#L95](https://github.com/jericht/aws-cdk/blob/56c01aedc4f745eec79409c99b749f516ffc39e1/packages/%40aws-cdk/aws-ec2/lib/aspects/require-imdsv2-aspect.ts#L95)

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.userData"></a>

```typescript
public readonly userData: UserData;
```

- *Type:* aws-cdk-lib.aws_ec2.UserData

The user data to apply to the instance.

---

### ManagedLoggingPolicyProps <a name="ManagedLoggingPolicyProps" id="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicyProps"></a>

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicyProps.Initializer"></a>

```typescript
import { ManagedLoggingPolicyProps } from '@renovosolutions/cdk-library-renovo-instance-service'

const managedLoggingPolicyProps: ManagedLoggingPolicyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicyProps.property.os">os</a></code> | <code>string</code> | The OS of the instance this policy is for. |

---

##### `os`<sup>Required</sup> <a name="os" id="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicyProps.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

The OS of the instance this policy is for.

---



