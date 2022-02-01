# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### InstanceService <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservice"></a>

#### Initializers <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.Initializer" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceserviceinitializer"></a>

```typescript
import { InstanceService } from '@renovosolutions/cdk-library-renovo-instance-service'

new InstanceService(scope: Construct, id: string, props: InstanceServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceserviceparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceserviceparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceserviceparameterprops)<span title="Required">*</span> | [`@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps`](#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.parameter.scope" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceserviceparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.parameter.id" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceserviceparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.parameter.props" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceserviceparameterprops"></a>

- *Type:* [`@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps`](#@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`instance`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstance)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.Instance`](#aws-cdk-lib.aws_ec2.Instance) | The underlying instance resource. |
| [`instanceAvailabilityZone`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstanceavailabilityzone)<span title="Required">*</span> | `string` | The availability zone of the instance. |
| [`instanceCfn`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstancecfn)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.CfnInstance`](#aws-cdk-lib.aws_ec2.CfnInstance) | The underlying CfnInstance resource. |
| [`instanceDnsName`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstancednsname)<span title="Required">*</span> | [`aws-cdk-lib.aws_route53.ARecord`](#aws-cdk-lib.aws_route53.ARecord) | DNS record for this instance created in Route53. |
| [`instanceEc2PrivateDnsName`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstanceec2privatednsname)<span title="Required">*</span> | `string` | Private DNS name for this instance assigned by EC2. |
| [`instanceEc2PublicDnsName`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstanceec2publicdnsname)<span title="Required">*</span> | `string` | Public DNS name for this instance assigned by EC2. |
| [`instanceId`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstanceid)<span title="Required">*</span> | `string` | The instance's ID. |
| [`instancePrivateIp`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstanceprivateip)<span title="Required">*</span> | `string` | Private IP for this instance. |
| [`instanceProfile`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstanceprofile)<span title="Required">*</span> | [`@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole`](#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole) | The instance profile associated with this instance. |
| [`osType`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyostype)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.OperatingSystemType`](#aws-cdk-lib.aws_ec2.OperatingSystemType) | The type of OS the instance is running. |
| [`securityGroup`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertysecuritygroup)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.SecurityGroup`](#aws-cdk-lib.aws_ec2.SecurityGroup) | The security group associated with this instance. |

---

##### `instance`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instance" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstance"></a>

```typescript
public readonly instance: Instance;
```

- *Type:* [`aws-cdk-lib.aws_ec2.Instance`](#aws-cdk-lib.aws_ec2.Instance)

The underlying instance resource.

---

##### `instanceAvailabilityZone`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceAvailabilityZone" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstanceavailabilityzone"></a>

```typescript
public readonly instanceAvailabilityZone: string;
```

- *Type:* `string`

The availability zone of the instance.

---

##### `instanceCfn`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceCfn" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstancecfn"></a>

```typescript
public readonly instanceCfn: CfnInstance;
```

- *Type:* [`aws-cdk-lib.aws_ec2.CfnInstance`](#aws-cdk-lib.aws_ec2.CfnInstance)

The underlying CfnInstance resource.

---

##### `instanceDnsName`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceDnsName" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstancednsname"></a>

```typescript
public readonly instanceDnsName: ARecord;
```

- *Type:* [`aws-cdk-lib.aws_route53.ARecord`](#aws-cdk-lib.aws_route53.ARecord)

DNS record for this instance created in Route53.

---

##### `instanceEc2PrivateDnsName`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceEc2PrivateDnsName" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstanceec2privatednsname"></a>

```typescript
public readonly instanceEc2PrivateDnsName: string;
```

- *Type:* `string`

Private DNS name for this instance assigned by EC2.

---

##### `instanceEc2PublicDnsName`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceEc2PublicDnsName" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstanceec2publicdnsname"></a>

```typescript
public readonly instanceEc2PublicDnsName: string;
```

- *Type:* `string`

Public DNS name for this instance assigned by EC2.

---

##### `instanceId`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceId" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstanceid"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* `string`

The instance's ID.

---

##### `instancePrivateIp`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instancePrivateIp" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstanceprivateip"></a>

```typescript
public readonly instancePrivateIp: string;
```

- *Type:* `string`

Private IP for this instance.

---

##### `instanceProfile`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.instanceProfile" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyinstanceprofile"></a>

```typescript
public readonly instanceProfile: ManagedInstanceRole;
```

- *Type:* [`@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole`](#@renovosolutions/cdk-library-managed-instance-role.ManagedInstanceRole)

The instance profile associated with this instance.

---

##### `osType`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.osType" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertyostype"></a>

```typescript
public readonly osType: OperatingSystemType;
```

- *Type:* [`aws-cdk-lib.aws_ec2.OperatingSystemType`](#aws-cdk-lib.aws_ec2.OperatingSystemType)

The type of OS the instance is running.

---

##### `securityGroup`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceService.property.securityGroup" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropertysecuritygroup"></a>

```typescript
public readonly securityGroup: SecurityGroup;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SecurityGroup`](#aws-cdk-lib.aws_ec2.SecurityGroup)

The security group associated with this instance.

---


### ManagedLoggingPolicy <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy" id="renovosolutionscdklibraryrenovoinstanceservicemanagedloggingpolicy"></a>

#### Initializers <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.Initializer" id="renovosolutionscdklibraryrenovoinstanceservicemanagedloggingpolicyinitializer"></a>

```typescript
import { ManagedLoggingPolicy } from '@renovosolutions/cdk-library-renovo-instance-service'

new ManagedLoggingPolicy(scope: Construct, id: string, props: ManagedLoggingPolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#renovosolutionscdklibraryrenovoinstanceservicemanagedloggingpolicyparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#renovosolutionscdklibraryrenovoinstanceservicemanagedloggingpolicyparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#renovosolutionscdklibraryrenovoinstanceservicemanagedloggingpolicyparameterprops)<span title="Required">*</span> | [`@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicyProps`](#@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicyProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.parameter.scope" id="renovosolutionscdklibraryrenovoinstanceservicemanagedloggingpolicyparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.parameter.id" id="renovosolutionscdklibraryrenovoinstanceservicemanagedloggingpolicyparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.parameter.props" id="renovosolutionscdklibraryrenovoinstanceservicemanagedloggingpolicyparameterprops"></a>

- *Type:* [`@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicyProps`](#@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicyProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`policy`](#renovosolutionscdklibraryrenovoinstanceservicemanagedloggingpolicypropertypolicy)<span title="Required">*</span> | [`aws-cdk-lib.aws_iam.ManagedPolicy`](#aws-cdk-lib.aws_iam.ManagedPolicy) | *No description.* |

---

##### `policy`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicy.property.policy" id="renovosolutionscdklibraryrenovoinstanceservicemanagedloggingpolicypropertypolicy"></a>

```typescript
public readonly policy: ManagedPolicy;
```

- *Type:* [`aws-cdk-lib.aws_iam.ManagedPolicy`](#aws-cdk-lib.aws_iam.ManagedPolicy)

---


## Structs <a name="Structs" id="structs"></a>

### AmiLookup <a name="@renovosolutions/cdk-library-renovo-instance-service.AmiLookup" id="renovosolutionscdklibraryrenovoinstanceserviceamilookup"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AmiLookup } from '@renovosolutions/cdk-library-renovo-instance-service'

const amiLookup: AmiLookup = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`name`](#renovosolutionscdklibraryrenovoinstanceserviceamilookuppropertyname)<span title="Required">*</span> | `string` | The name string to use for AMI lookup. |
| [`owners`](#renovosolutionscdklibraryrenovoinstanceserviceamilookuppropertyowners) | `string`[] | The owners to use for AMI lookup. |
| [`windows`](#renovosolutionscdklibraryrenovoinstanceserviceamilookuppropertywindows) | `boolean` | Is this AMI expected to be windows? |

---

##### `name`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.AmiLookup.property.name" id="renovosolutionscdklibraryrenovoinstanceserviceamilookuppropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name string to use for AMI lookup.

---

##### `owners`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.AmiLookup.property.owners" id="renovosolutionscdklibraryrenovoinstanceserviceamilookuppropertyowners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* `string`[]

The owners to use for AMI lookup.

---

##### `windows`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.AmiLookup.property.windows" id="renovosolutionscdklibraryrenovoinstanceserviceamilookuppropertywindows"></a>

```typescript
public readonly windows: boolean;
```

- *Type:* `boolean`

Is this AMI expected to be windows?

---

### InstanceServiceProps <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceserviceprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { InstanceServiceProps } from '@renovosolutions/cdk-library-renovo-instance-service'

const instanceServiceProps: InstanceServiceProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`instanceType`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyinstancetype)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.InstanceType`](#aws-cdk-lib.aws_ec2.InstanceType) | The type of instance to launch. |
| [`machineImage`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertymachineimage)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IMachineImage`](#aws-cdk-lib.aws_ec2.IMachineImage) | AMI to launch. |
| [`name`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyname)<span title="Required">*</span> | `string` | The name of the service the instance is for. |
| [`parentDomain`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyparentdomain)<span title="Required">*</span> | `string` | The parent domain of the service. |
| [`vpc`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | The VPC to launch the instance in. |
| [`allowAllOutbound`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyallowalloutbound) | `boolean` | Whether the instance could initiate connections to anywhere by default. |
| [`availabilityZones`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyavailabilityzones) | `string`[] | Select subnets only in the given AZs. |
| [`blockDevices`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyblockdevices) | [`aws-cdk-lib.aws_ec2.BlockDevice`](#aws-cdk-lib.aws_ec2.BlockDevice)[] | Specifies how block devices are exposed to the instance. |
| [`disableInlineRules`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertydisableinlinerules) | `boolean` | Whether to disable inline ingress and egress rule optimization for the instances security group. |
| [`enableCloudwatchLogs`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyenablecloudwatchlogs) | `boolean` | Whether or not to enable logging to Cloudwatch Logs. |
| [`enabledNoPublicIngressAspect`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyenablednopublicingressaspect) | `boolean` | Whether or not to prevent security group from containing rules that allow access from the public internet: Any rule with a source from 0.0.0.0/0 or ::/0. |
| [`enableNoDBPortsAspect`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyenablenodbportsaspect) | `boolean` | Whether or not to prevent security group from containing rules that allow access to relational DB ports: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server. |
| [`enableNoRemoteManagementPortsAspect`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyenablenoremotemanagementportsaspect) | `boolean` | Whether or not to prevent security group from containing rules that allow access to remote management ports: SSH, RDP, WinRM, WinRM over HTTPs. |
| [`keyName`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertykeyname) | `string` | Name of the SSH keypair to grant access to the instance. |
| [`privateIpAddress`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyprivateipaddress) | `string` | Defines a private IP address to associate with the instance. |
| [`subnetType`](#renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertysubnettype) | [`aws-cdk-lib.aws_ec2.SubnetType`](#aws-cdk-lib.aws_ec2.SubnetType) | The subnet type to launch this service in. |

---

##### `instanceType`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.instanceType" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyinstancetype"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* [`aws-cdk-lib.aws_ec2.InstanceType`](#aws-cdk-lib.aws_ec2.InstanceType)

The type of instance to launch.

---

##### `machineImage`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.machineImage" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertymachineimage"></a>

```typescript
public readonly machineImage: IMachineImage;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IMachineImage`](#aws-cdk-lib.aws_ec2.IMachineImage)

AMI to launch.

---

##### `name`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.name" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the service the instance is for.

---

##### `parentDomain`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.parentDomain" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyparentdomain"></a>

```typescript
public readonly parentDomain: string;
```

- *Type:* `string`

The parent domain of the service.

---

##### `vpc`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.vpc" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

The VPC to launch the instance in.

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.allowAllOutbound" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyallowalloutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* `boolean`

Whether the instance could initiate connections to anywhere by default.

---

##### `availabilityZones`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.availabilityZones" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyavailabilityzones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* `string`[]

Select subnets only in the given AZs.

---

##### `blockDevices`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.blockDevices" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyblockdevices"></a>

```typescript
public readonly blockDevices: BlockDevice[];
```

- *Type:* [`aws-cdk-lib.aws_ec2.BlockDevice`](#aws-cdk-lib.aws_ec2.BlockDevice)[]

Specifies how block devices are exposed to the instance.

You can specify virtual devices and EBS volumes

---

##### `disableInlineRules`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.disableInlineRules" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertydisableinlinerules"></a>

```typescript
public readonly disableInlineRules: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether to disable inline ingress and egress rule optimization for the instances security group.

If this is set to true, ingress and egress rules will not be declared under the SecurityGroup in cloudformation, but will be separate elements.  Inlining rules is an optimization for producing smaller stack templates. Sometimes this is not desirable, for example when security group access is managed via tags.  The default value can be overriden globally by setting the context variable '@aws-cdk/aws-ec2.securityGroupDisableInlineRules'.

---

##### `enableCloudwatchLogs`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.enableCloudwatchLogs" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyenablecloudwatchlogs"></a>

```typescript
public readonly enableCloudwatchLogs: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether or not to enable logging to Cloudwatch Logs.

---

##### `enabledNoPublicIngressAspect`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.enabledNoPublicIngressAspect" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyenablednopublicingressaspect"></a>

```typescript
public readonly enabledNoPublicIngressAspect: boolean;
```

- *Type:* `boolean`

Whether or not to prevent security group from containing rules that allow access from the public internet: Any rule with a source from 0.0.0.0/0 or ::/0.

If these sources are used when this is enabled and error will be added to CDK metadata and deployment and synth will fail.

---

##### `enableNoDBPortsAspect`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.enableNoDBPortsAspect" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyenablenodbportsaspect"></a>

```typescript
public readonly enableNoDBPortsAspect: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether or not to prevent security group from containing rules that allow access to relational DB ports: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server.

If these ports are opened when this is enabled an error will be added to CDK metadata and deployment and synth will fail.

---

##### `enableNoRemoteManagementPortsAspect`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.enableNoRemoteManagementPortsAspect" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyenablenoremotemanagementportsaspect"></a>

```typescript
public readonly enableNoRemoteManagementPortsAspect: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether or not to prevent security group from containing rules that allow access to remote management ports: SSH, RDP, WinRM, WinRM over HTTPs.

If these ports are opened when this is enabled an error will be added to CDK metadata and deployment and synth will fail.

---

##### `keyName`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.keyName" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertykeyname"></a>

```typescript
public readonly keyName: string;
```

- *Type:* `string`

Name of the SSH keypair to grant access to the instance.

---

##### `privateIpAddress`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.privateIpAddress" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertyprivateipaddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* `string`

Defines a private IP address to associate with the instance.

---

##### `subnetType`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.InstanceServiceProps.property.subnetType" id="renovosolutionscdklibraryrenovoinstanceserviceinstanceservicepropspropertysubnettype"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SubnetType`](#aws-cdk-lib.aws_ec2.SubnetType)
- *Default:* ec2.SubnetType.PRIVATE_WITH_NAT

The subnet type to launch this service in.

---

### ManagedLoggingPolicyProps <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicyProps" id="renovosolutionscdklibraryrenovoinstanceservicemanagedloggingpolicyprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ManagedLoggingPolicyProps } from '@renovosolutions/cdk-library-renovo-instance-service'

const managedLoggingPolicyProps: ManagedLoggingPolicyProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`os`](#renovosolutionscdklibraryrenovoinstanceservicemanagedloggingpolicypropspropertyos)<span title="Required">*</span> | `string` | The OS of the instance this policy is for. |

---

##### `os`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-instance-service.ManagedLoggingPolicyProps.property.os" id="renovosolutionscdklibraryrenovoinstanceservicemanagedloggingpolicypropspropertyos"></a>

```typescript
public readonly os: string;
```

- *Type:* `string`

The OS of the instance this policy is for.

---



